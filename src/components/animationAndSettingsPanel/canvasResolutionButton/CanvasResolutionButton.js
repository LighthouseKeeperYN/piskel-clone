import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './canvasResolutionButton.scss';

import { DEFAULT_CANVAS_SIZE } from '../../../shared/constants';

import CanvasContext from '../../../context/canvas/canvasContext';
import AnimationAndSettingsPanelContext from '../../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';
import FramePanelContext from '../../../context/framePanel/framePanelContext';

function CanvasResolutionButton({ pxSize }) {
  const { canvasCtx } = useContext(CanvasContext);
  const { clearFrames, addFrame } = useContext(FramePanelContext);
  const { pixelSize, setPixelSize } = useContext(AnimationAndSettingsPanelContext);

  const resolution = DEFAULT_CANVAS_SIZE / pxSize;

  const changeResolutionAndClearCanvas = () => {
    setPixelSize(pxSize);
    canvasCtx.clearRect(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE);
    clearFrames();
    addFrame(canvasCtx.getImageData(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE));
  };

  return (
    <button
      className={`canvasResolutionButton ${pxSize === pixelSize
        && 'canvasResolutionButton--selected'}`}
      onClick={changeResolutionAndClearCanvas}
    >{`${resolution} x ${resolution}`}</button>
  );
}

CanvasResolutionButton.propTypes = {
  pxSize: PropTypes.number.isRequired,
};

export default CanvasResolutionButton;
