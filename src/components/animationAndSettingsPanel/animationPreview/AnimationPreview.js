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

  useEffect(() => {
    const ctx = animationPreviewRef.current.getContext('2d');
    let counter = 0;

    const animate = () => {
      ctx.putImageData(frameCollection[counter], 0, 0);
      counter === frameCollection.length - 1 ? (counter = 0) : (counter += 1);
    };

    clearInterval(animation);
    if (frameRate) animation = setInterval(animate, 1000 / frameRate);
  }, [frameCollection, frameRate]);

  return (
    <canvas
      className="animation-preview"
      width={DEFAULT_CANVAS_SIZE}
      height={DEFAULT_CANVAS_SIZE}
      ref={animationPreviewRef}
    ></canvas>
  );
}

export default AnimationPreview;
