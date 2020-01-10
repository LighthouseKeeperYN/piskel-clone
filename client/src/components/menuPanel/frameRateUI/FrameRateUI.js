import React, { useContext } from 'react';

import './frameRateUI.scss';

import { MIN_FRAME_RATE, MAX_FRAME_RATE } from '../../../shared/constants';

import MenuPanelContext from '../../../context/menuPanel/menuPanelContext';

function FrameRateUI() {
  const { frameRate, setFrameRate } = useContext(MenuPanelContext)

  return (
    <div className="frame-rate-ui-wrapper">
      <span>
        {frameRate}
        {' FPS'}
      </span>
      <input
        className="frame-rate-ui-input"
        type="range"
        min={MIN_FRAME_RATE}
        max={MAX_FRAME_RATE}
        value={frameRate}
        onChange={(e) => setFrameRate(+e.target.value)}
      ></input>
    </div>
  );
}

export default FrameRateUI;
