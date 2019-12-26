import React from 'react';
import { ReactComponent as ColorArrow } from './color-arrow-icon.svg';
import { ChromePicker } from 'react-color';

import './colorSelectionUI.scss';

// return <ChromePicker disableAlpha={true} />

function ColorSelectorUI() {
  return (
    <div className="color-selection-wrapper">
      <div className="color-selection color-selection__primary"></div>
      <div className="color-selection color-selection__secondary"></div>
      <ColorArrow className="color-selection-arrow" />
    </div>
  );
}

export default ColorSelectorUI;
