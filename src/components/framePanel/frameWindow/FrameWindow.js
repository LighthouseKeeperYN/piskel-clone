import React, { useRef, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import './frameWindows.scss';

import { DEFAULT_CANVAS_SIZE } from '../../../shared/constants';

import FramePanelContext from '../../../context/framePanel/framePanelContext';
import CanvasContext from '../../../context/canvas/canvasContext';

function FrameWindow({ imgData, index }) {
  const frameRef = useRef(null);

  const {
    frameCollection,
    currentFrame,
    draggingFrame,
    changeIndex,
    deleteFrame,
    duplicateFrame,
    moveFrame,
    setDraggingFrame,
  } = useContext(FramePanelContext);

  const { canvasCtx } = useContext(CanvasContext);

  const putFrameOnCanvas = () => {
    if (currentFrame === index) {
      canvasCtx.clearRect(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE);
      canvasCtx.drawImage(frameRef.current, 0, 0);
    }
  };

  const putCanvasOnFrame = () => {
    const ctx = frameRef.current.getContext('2d');
    ctx.clearRect(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE);
    ctx.putImageData(imgData, 0, 0);
  };

  useEffect(putCanvasOnFrame, [imgData]);
  useEffect(putFrameOnCanvas, [frameCollection.length]);

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

  const handleFrameDuplication = (e) => {
    e.stopPropagation();
    canvasCtx.clearRect(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE);
    duplicateFrame(index);
  };

  return (
    <div
      className={`frame-window ${currentFrame === index ? 'frame-window--selected' : ''}`}
      draggable={true}
      onClick={handleFrameSelection}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={(e) => {
        e.stopPropagation();
        e.currentTarget.classList.add(
          `frame-window--dragged-over-${draggingFrame > index ? 'top' : 'bottom'}`,
        );
      }}
      onDragLeave={(e) => {
        e.stopPropagation();
        e.currentTarget.classList.remove(
          'frame-window--dragged-over-top',
          'frame-window--dragged-over-bottom',
        );
      }}
      onDragStart={(e) => {
        e.currentTarget.classList.add('frame-window--being-dragged');
        setDraggingFrame(index);
      }}
      onDrop={(e) => {
        e.currentTarget.classList.remove(
          'frame-window--dragged-over-top',
          'frame-window--dragged-over-bottom',
        );
        moveFrame(draggingFrame, index);
      }}
      onDragEnd={(e) => e.currentTarget.classList.remove('frame-window--being-dragged')}
    >
      <span className="frame-number">{index + 1}</span>
      {frameCollection.length > 1 && (
        <div className="frame-delete" onClick={handleFrameDeletion}></div>
      )}
      <div className="frame-duplicate" onClick={handleFrameDuplication}></div>
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
  imgData: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default FrameWindow;
