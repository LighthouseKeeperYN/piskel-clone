import React from 'react';

import './animationAndSettingsPanel.scss';

import { PIXEL_SIZES } from '../../shared/constants';

import AnimationPreview from './animationPreview/AnimationPreview';
import FrameRateUI from './frameRateUI/FrameRateUI';
import CanvasResolutionButton from './canvasResolutionButton/CanvasResolutionButton';

function AnimationAndSettingsPanel() {
  return (
    <div className="animation-and-settings-panel">
      <AnimationPreview />
      <FrameRateUI />
      {Object.values(PIXEL_SIZES)
        .reverse()
        .map((pxSize) => (
          <CanvasResolutionButton key={`pxSize-${pxSize}`} pxSize={pxSize} />
        ))}
    </div>
  );
}

export default AnimationAndSettingsPanel;
