import React from 'react';

import './animationAndSettingsPanel.scss';

import AnimationPreview from './animationPreview/AnimationPreview';
import FrameRateUI from './frameRateUI/FrameRateUI';

function AnimationAndSettingsPanel() {
  return (
    <div className="animation-and-settings-panel">
      <AnimationPreview />
      <FrameRateUI />
    </div>
  );
}

export default AnimationAndSettingsPanel;
