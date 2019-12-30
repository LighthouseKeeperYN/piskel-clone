import React from 'react';

import './animationAndSettingsPanel.scss';

import { PIXEL_SIZES } from '../../shared/constants';

import AnimationPreview from './animationPreview/AnimationPreview';
import FrameRateUI from './frameRateUI/FrameRateUI';
import CanvasResolutionButton from './canvasResolutionButton/CanvasResolutionButton';
import SaveAs from './saveAs/SaveAs';

function AnimationAndSettingsPanel() {
  return (
    <div className="animation-and-settings-panel">
      <AnimationPreview />
      <FrameRateUI />
      <p className="sprite-resolution-title">Sprite resolution:</p>
      {Object.values(PIXEL_SIZES)
        .reverse()
        .map((pxSize) => (
          <CanvasResolutionButton key={`pxSize-${pxSize}`} pxSize={pxSize} />
        ))}
      <SaveAs />
    </div>
  );
}

export default AnimationAndSettingsPanel;
