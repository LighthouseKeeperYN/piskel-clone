import React, { useContext } from 'react';
import Tooltip from 'react-tooltip-lite';

import './addFrameUI.scss';

import { DEFAULT_CANVAS_SIZE, TOOLTIP_PROPS } from '../../../shared/constants';

import FramePanelContext from '../../../context/framePanel/framePanelContext';

function AddFrameUI() {
  const { addFrame } = useContext(FramePanelContext);

  const handleFrameAddition = () => {
    addFrame(new ImageData(DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE));
  };

  return (
    <Tooltip
      content="(n)"
      direction={TOOLTIP_PROPS.directions.right}
      className="add-frame-ui__tooltip"
      arrowSize={TOOLTIP_PROPS.arrowSize}
      padding={TOOLTIP_PROPS.padding}
      hoverDelay={TOOLTIP_PROPS.delay}
    >
      <div className="add-frame-ui" onClick={handleFrameAddition}>
        <span className="add-frame-ui__icon">+</span>
        <span className="add-frame-ui__text">Add new frame</span>
      </div>
    </Tooltip>
  );
}

export default AddFrameUI;
