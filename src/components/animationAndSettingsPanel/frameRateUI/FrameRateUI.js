import React, { useContext } from 'react';

import './frameRateUI.scss';

import AnimationAndSettingsPanelContext from '../../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';

function FrameRateUI() {
  const { frameRate, setFrameRate } = useContext(AnimationAndSettingsPanelContext);

  return (
    <div className="frame-rate-ui-wrapper">
      <span>{frameRate}{' FPS'}</span>
      <input
      className="frame-rate-ui-input"
        type="range"
        min={1}
        max={24}
        value={frameRate}
        onChange={(e) => {
          setFrameRate(+e.target.value);
        }}
      ></input>
    </div>
  );
}

export default FrameRateUI;
