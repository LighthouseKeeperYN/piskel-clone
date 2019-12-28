import React, { useRef, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import './frameWindows.scss';

import { DEFAULT_CANVAS_SIZE } from '../../../shared/constants';

import FramePanelContext from '../../../context/framePanel/framePanelContext';
import CanvasContext from '../../../context/canvas/canvasContext';

function FrameWindow({ imgData, index }) {
  const frameRef = useRef(null);

  const { frameCollection, currentFrame, changeIndex, deleteFrame } = useContext(FramePanelContext);
  const { canvasCtx } = useContext(CanvasContext);

  useEffect(() => {
    const ctx = frameRef.current.getContext('2d');
    ctx.clearRect(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE);
    ctx.putImageData(imgData, 0, 0);
  }, [imgData]);

  useEffect(() => {
    console.log('fired');
    if (currentFrame === index) canvasCtx.drawImage(frameRef.current, 0, 0);
  }, [frameCollection.length]);

  const handleFrameSelection = () => {
    canvasCtx.clearRect(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE);
    canvasCtx.drawImage(frameRef.current, 0, 0);
    changeIndex(index);
  };

  const handleFrameDeletion = (e) => {
    e.stopPropagation();
    canvasCtx.clearRect(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE);
    deleteFrame(index);
  };

  return (
    <div
      className={`frame-window ${currentFrame === index ? 'frame-window--selected' : ''}`}
      draggable={true}
      onClick={handleFrameSelection}
    >
      <span className="frame-number">{index + 1}</span>
      {frameCollection.length > 1 && (
        <div className="frame-delete" onClick={handleFrameDeletion}></div>
      )}
      <div className="frame-duplicate"></div>
      <canvas
        className="frame-canvas"
        width={DEFAULT_CANVAS_SIZE}
        height={DEFAULT_CANVAS_SIZE}
        ref={frameRef}
      ></canvas>
    </div>
  );
}

FrameWindow.propTypes = {
  imgData: PropTypes.any,
  index: PropTypes.number.isRequired
};

export default FrameWindow;
