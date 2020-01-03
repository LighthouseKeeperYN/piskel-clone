import React, { useContext, useRef, useEffect } from 'react';

import './animationPreview.scss';

import { DEFAULT_CANVAS_SIZE } from '../../../shared/constants';

import FramePanelContext from '../../../context/framePanel/framePanelContext';
import AnimationAndSettingsPanelContext from '../../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';

let animation;

function AnimationPreview() {
  const { frameCollection } = useContext(FramePanelContext);
  const { frameRate } = useContext(AnimationAndSettingsPanelContext);

  const animationPreviewRef = useRef(null);

  const updateAnimationPreview = () => {
    const ctx = animationPreviewRef.current.getContext('2d');
    let counter = -1;

    const animate = () => {
      counter = counter >= frameCollection.length - 1 ? 0 : counter + 1;
      ctx.putImageData(frameCollection[counter], 0, 0);
    };

    clearInterval(animation);
    animation = setInterval(animate, 1000 / frameRate);
  };

  const toggleFullScreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    animationPreviewRef.current.requestFullscreen();
  };

  useEffect(updateAnimationPreview, [frameCollection, frameRate]);

  return (
    <canvas
      className="animation-preview"
      width={DEFAULT_CANVAS_SIZE}
      height={DEFAULT_CANVAS_SIZE}
      ref={animationPreviewRef}
      onClick={toggleFullScreen}
    ></canvas>
  );
}

export default AnimationPreview;
