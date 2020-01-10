import React, { useContext } from 'react';

import './menuPanel.scss';

import { PIXEL_SIZES } from '../../shared/constants';

import AnimationPreview from './animationPreview/AnimationPreview';
import FrameRateUI from './frameRateUI/FrameRateUI';
import CanvasResolutionButton from './canvasResolutionButton/CanvasResolutionButton';
import SaveAsUI from './saveAsUI/SaveAsUI';
import SaveLoadUI from './saveLoadUI/SaveLoadUI';

import AuthContext from '../../context/auth/authContext';

function MenuPanel() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="animation-and-settings-panel">
      <AnimationPreview />
      <FrameRateUI />
      <p className="sprite-resolution-title">Sprite resolution:</p>
      {PIXEL_SIZES.map((pxSize) => (
        <CanvasResolutionButton key={`pxSize-${pxSize}`} pxSize={pxSize} />
      ))}
      <SaveAsUI />
      {isAuthenticated && <SaveLoadUI />}
    </div>
  );
}

export default MenuPanel;
