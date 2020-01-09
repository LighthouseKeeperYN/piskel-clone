import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './canvasResolutionButton.scss';

import { DEFAULT_CANVAS_SIZE } from '../../../shared/constants';

import AnimationAndSettingsPanelContext from '../../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';
import FramePanelContext from '../../../context/framePanel/framePanelContext';

function CanvasResolutionButton({ pxSize }) {
  const { resetFrames } = useContext(FramePanelContext);
  const { pixelSize, setPixelSize } = useContext(AnimationAndSettingsPanelContext);

  const resolution = DEFAULT_CANVAS_SIZE / pxSize;

  const changeResolutionAndClearCanvas = () => {
    if (pxSize === pixelSize) return;

    setPixelSize(pxSize);
    resetFrames();
  };

  return (
    <button
      className={`canvasResolutionButton ${
        pxSize === pixelSize ? 'canvasResolutionButton--selected' : ''
      }`}
      onClick={changeResolutionAndClearCanvas}
    >
      {`${resolution} x ${resolution}`}
    </button>
  );
}

CanvasResolutionButton.propTypes = {
  pxSize: PropTypes.number.isRequired,
};

export default CanvasResolutionButton;
