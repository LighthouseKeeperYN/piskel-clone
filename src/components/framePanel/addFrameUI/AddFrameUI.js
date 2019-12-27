import React, { useContext } from 'react';

import './addFrameUI.scss';

import { DEFAULT_CANVAS_SIZE } from '../../../shared/constants';

import FramePanelContext from '../../../context/framePanel/framePanelContext';
import CanvasContest from '../../../context/canvas/canvasContext';

function AddFrameUI() {
  const { addFrame } = useContext(FramePanelContext);
  const { canvasCtx } = useContext(CanvasContest);
  console.log('addframe',canvasCtx);
  return (
    <div
      className="add-frame-ui"
      onClick={() => {
        console.log(canvasCtx)
        canvasCtx.clearRect(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE);
        addFrame();
      }}
    >
      <span className="add-frame-ui__icon">+</span>
      <span className="add-frame-ui__text">Add new frame</span>
    </div>
  );
}

export default AddFrameUI;
