import React, { useContext } from 'react';

import './frameRateUI.scss';
import { DEFAULT_FRAME_RATE } from '../../../shared/constants';

import AnimationAndSettingsPanelContext from '../../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';

function FrameRateUI() {
  const { frameRate, setFrameRate } = useContext(AnimationAndSettingsPanelContext);

  return (
    <div className="frame-rate-ui-wrapper">
      <span className="frame-rate-value">{frameRate}{' FPS'}</span>
      <input
        type="range"
        min={0}
        max={24}
        defaultValue={DEFAULT_FRAME_RATE}
        onChange={(e) => {
          setFrameRate(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default FrameRateUI;
