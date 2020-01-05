import React, { useContext } from 'react';
import { saveAs as saveImage } from 'file-saver';
import Tooltip from 'react-tooltip-lite';

import './saveAsUI.scss';

import FramePanelContext from '../../../context/framePanel/framePanelContext';
import ShortcutsContext from '../../../context/shortcuts/shortcutsContext';
import AnimationAndSettingsPanelContext from '../../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';

import {
  imageDataCollectionToAPNG,
  imageDataCollectionToGIF,
  shortcutToString
} from '../../../shared/utilities';
import { DEFAULT_CANVAS_SIZE, TOOLTIP_PROPS, SHORTCUT_ACTIONS } from '../../../shared/constants';

function SaveAs() {
  const { frameCollection } = useContext(FramePanelContext);
  const { frameRate } = useContext(AnimationAndSettingsPanelContext);
  const { shortcuts } = useContext(ShortcutsContext);

  const saveAsAPNG = () => {
    const image = imageDataCollectionToAPNG({
      frameCollection,
      size: DEFAULT_CANVAS_SIZE,
      frameRate
    });
    saveImage(image, `${new Date().getTime()}.png`);
  };

  const saveAsGIF = () => {
    const image = imageDataCollectionToGIF({
      frameCollection,
      size: DEFAULT_CANVAS_SIZE,
      frameRate
    });
    saveImage(image, `${new Date().getTime()}.gif`);
  };

  return (
    <div className="save-as-wrapper">
      <p>Save as:</p>
      <Tooltip
        content={
          <span className="tooltip-shortcut">
            {shortcutToString(shortcuts[SHORTCUT_ACTIONS.saveAsAPNG])}
          </span>
        }
        direction={TOOLTIP_PROPS.directions.down}
        className="save-as-tooltip"
        arrowSize={TOOLTIP_PROPS.arrowSize}
        padding={TOOLTIP_PROPS.padding}
        hoverDelay={TOOLTIP_PROPS.delay}
      >
        <button className="save-as-button" onClick={saveAsAPNG}>
          APNG
        </button>
      </Tooltip>
      <Tooltip
        content={
          <span className="tooltip-shortcut">
            {shortcutToString(shortcuts[SHORTCUT_ACTIONS.saveAsGIF])}
          </span>
        }
        direction={TOOLTIP_PROPS.directions.down}
        className="save-as-tooltip"
        arrowSize={TOOLTIP_PROPS.arrowSize}
        padding={TOOLTIP_PROPS.padding}
        hoverDelay={TOOLTIP_PROPS.delay}
      >
        <button className="save-as-button" onClick={saveAsGIF}>
          GIF
        </button>
      </Tooltip>
    </div>
  );
}

export default SaveAs;
