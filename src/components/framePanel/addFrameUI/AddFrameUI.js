import React, { useContext } from 'react';
import Tooltip from 'react-tooltip-lite';

import './addFrameUI.scss';

import { DEFAULT_CANVAS_SIZE, TOOLTIP_PROPS, SHORTCUT_ACTIONS } from '../../../shared/constants';
import { shortcutToString } from '../../../shared/utilities';

import FramePanelContext from '../../../context/framePanel/framePanelContext';
import ShortcutsContext from '../../../context/shortcuts/shortcutsContext';

function AddFrameUI() {
  const { addFrame } = useContext(FramePanelContext);
  const { shortcuts } = useContext(ShortcutsContext);

  const handleFrameAddition = () => {
    addFrame(new ImageData(DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE));
  };

  return (
    <Tooltip
      content={
        <span className="tooltip-shortcut">
          {shortcutToString(shortcuts, SHORTCUT_ACTIONS.addNewFrame)}
        </span>
      }
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
