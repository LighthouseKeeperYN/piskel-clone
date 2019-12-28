import React, { useRef, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import './frameWindows.scss';

import { DEFAULT_CANVAS_SIZE } from '../../../shared/constants';

import FramePanelContext from '../../../context/framePanel/framePanelContext';
import CanvasContext from '../../../context/canvas/canvasContext';

function FrameWindow({ number, imgData, isSelected, index }) {
  const frameRef = useRef(null);

  const { changeIndex } = useContext(FramePanelContext);
  const { canvasCtx } = useContext(CanvasContext);

  useEffect(() => {
    const ctx = frameRef.current.getContext('2d');
    ctx.clearRect(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE);
    ctx.putImageData(imgData, 0, 0);
  });

  const handleFrameSelection = () => {
    canvasCtx.clearRect(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE);
    canvasCtx.drawImage(frameRef.current, 0, 0);
    changeIndex(index);
  };

  return (
    <div
      className={`frame-window ${isSelected ? 'frame-window--selected' : ''}`}
      draggable={true}
      onClick={handleFrameSelection}
    >
      <span className="frame-number">{number}</span>
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
  number: PropTypes.number.isRequired,
  imgData: PropTypes.any,
  isSelected: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired
};

export default FrameWindow;
