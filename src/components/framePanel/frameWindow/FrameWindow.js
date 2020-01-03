import React, { useRef, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import './frameWindows.scss';

import { DEFAULT_CANVAS_SIZE } from '../../../shared/constants';

import FramePanelContext from '../../../context/framePanel/framePanelContext';
import CanvasContext from '../../../context/canvas/canvasContext';

import CopyButton from './CopyButton';
import DeleteButton from './DeleteButton';

function FrameWindow({ imgData, index }) {
  const frameRef = useRef(null);

  const {
    frameCollection,
    currentFrame,
    draggingFrame,
    changeIndex,
    moveFrame,
    setDraggingFrame
  } = useContext(FramePanelContext);

  const { canvasCtx } = useContext(CanvasContext);

  const putFrameOnCanvas = () => {
    if (currentFrame === index && canvasCtx) {
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
  useEffect(putFrameOnCanvas, [frameCollection.length, currentFrame, canvasCtx]);

  const markLandingZone = (e) => {
    e.stopPropagation();
    e.currentTarget.classList.add(
      `frame-window--dragged-over-${draggingFrame > index ? 'top' : 'bottom'}`
    );
  };

  const clearLandingMark = (e) => {
    e.stopPropagation();
    e.currentTarget.classList.remove(
      'frame-window--dragged-over-top',
      'frame-window--dragged-over-bottom'
    );
  };

  const ejectFrameWindow = (e) => {
    e.currentTarget.classList.add('frame-window--being-dragged');
    setDraggingFrame(index);
  };

  const moveFrameToNewPosition = (e) => {
    e.currentTarget.classList.remove(
      'frame-window--dragged-over-top',
      'frame-window--dragged-over-bottom'
    );
    moveFrame(draggingFrame, index);
  };

  const endDragging = (e) => {
    e.currentTarget.classList.remove('frame-window--being-dragged');
  };

  return (
    <div
      className={`frame-window ${currentFrame === index ? 'frame-window--selected' : ''}`}
      draggable={true}
      onClick={() => changeIndex(index)}
      onDragOver={(e) => e.preventDefault()}
      onDragStart={ejectFrameWindow}
      onDragEnter={markLandingZone}
      onDragLeave={clearLandingMark}
      onDrop={moveFrameToNewPosition}
      onDragEnd={endDragging}
    >
      <span className="frame-number">{index + 1}</span>

      {frameCollection.length > 1 && <DeleteButton index={index} />}
      <CopyButton index={index} />

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
  index: PropTypes.number.isRequired
};

export default FrameWindow;
