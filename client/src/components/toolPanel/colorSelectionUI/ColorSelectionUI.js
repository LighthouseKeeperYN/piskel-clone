import React, { useContext, useRef } from 'react';
import { ChromePicker as ColorSelector } from 'react-color';
import useOnClickOutside from 'use-onclickoutside';

import './colorSelectionUI.scss';
import { ReactComponent as ColorArrow } from './color-arrow-icon.svg';

import ToolPanelContext from '../../../context/toolPanel/toolPanelContext';

function ColorSelectorUI() {
  const {
    setColorPrimary,
    setColorSecondary,
    swapSelectedColors,
    showColorSelectorPrimary,
    showColorSelectorSecondary,
    removeColorSelectors,
    colorPrimary,
    colorSecondary,
    colorSelectorPrimary,
    colorSelectorSecondary,
  } = useContext(ToolPanelContext);

  const ref = useRef(null);

  useOnClickOutside(ref, removeColorSelectors);

  return (
    <div className="color-selection-wrapper">
      <div>
        <div
          className="color-selection color-selection__primary"
          onClick={() => showColorSelectorPrimary()}
          style={{ backgroundColor: colorPrimary }}
        ></div>

        {colorSelectorPrimary && (
          <div className="color-selector" ref={ref}>
            <ColorSelector
              disableAlpha={true}
              color={colorPrimary}
              onChangeComplete={(color) => setColorPrimary(color.hex)}
            />
          </div>
        )}
      </div>

      <div>
        <div
          className="color-selection color-selection__secondary"
          onClick={() => showColorSelectorSecondary()}
          style={{ backgroundColor: colorSecondary }}
        ></div>

        {colorSelectorSecondary && (
          <div className="color-selector color-selector--secondary" ref={ref}>
            <ColorSelector
              disableAlpha={true}
              color={colorSecondary}
              onChangeComplete={(color) => setColorSecondary(color.hex)}
            />
          </div>
        )}
      </div>

      <ColorArrow className="color-selection-arrow" onClick={() => swapSelectedColors()} />
    </div>
  );
}

export default ColorSelectorUI;
