import React, { useContext } from 'react';

import './addFrameUI.scss';

import { DEFAULT_CANVAS_SIZE } from '../../../shared/constants';

import FramePanelContext from '../../../context/framePanel/framePanelContext';
import CanvasContest from '../../../context/canvas/canvasContext';

function AddFrameUI() {
  const { addFrame } = useContext(FramePanelContext);
  const { canvasCtx } = useContext(CanvasContest);

  return (
    <div
      className="add-frame-ui"
      onClick={() => {
        canvasCtx.clearRect(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE);
        addFrame(canvasCtx.getImageData(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE));
      }}
    >
      <span className="add-frame-ui__icon">+</span>
      <span className="add-frame-ui__text">Add new frame</span>
    </div>
  );
}

export default AddFrameUI;
