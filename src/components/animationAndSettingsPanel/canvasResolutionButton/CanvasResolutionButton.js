import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './canvasResolutionButton.scss';

import { DEFAULT_CANVAS_SIZE } from '../../../shared/constants';

import AnimationAndSettingsPanelContext from '../../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';


function CanvasResolutionButton({ pxSize }) {
  const { pixelSize, setPixelSize } = useContext(AnimationAndSettingsPanelContext);

  const resolution = DEFAULT_CANVAS_SIZE / pxSize;

  return (
    <button
      className={`canvasResolutionButton ${pxSize === pixelSize
        && 'canvasResolutionButton--selected'}`}
      onClick={() => setPixelSize(pxSize)}
    >{`not implemented ${resolution} x ${resolution}`}</button>
  );
}

CanvasResolutionButton.propTypes = {
  pxSize: PropTypes.number.isRequired,
};

export default CanvasResolutionButton;
