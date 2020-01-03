import React, { useContext } from 'react';
import Tooltip from 'react-tooltip-lite';

import './addFrameUI.scss';

import { DEFAULT_CANVAS_SIZE } from '../../../shared/constants';

import FramePanelContext from '../../../context/framePanel/framePanelContext';
import CanvasContest from '../../../context/canvas/canvasContext';

function AddFrameUI() {
  const { addFrame } = useContext(FramePanelContext);
  const { canvasCtx } = useContext(CanvasContest);

  const handleFrameAddition = () => {
    canvasCtx.clearRect(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE);
    addFrame(canvasCtx.getImageData(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE));
  };

  return (
    <Tooltip
      content="(n)"
      direction="right"
      className="add-frame-ui__tooltip"
      arrowSize={5}
      padding={5}
      hoverDelay={0}
    >
      <div className="add-frame-ui" onClick={handleFrameAddition}>
        <span className="add-frame-ui__icon">+</span>
        <span className="add-frame-ui__text">Add new frame</span>
      </div>
    </Tooltip>
  );
}

export default AddFrameUI;
