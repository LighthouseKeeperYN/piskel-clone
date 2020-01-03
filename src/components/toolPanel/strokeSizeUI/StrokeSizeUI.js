import React, { useContext } from 'react';
import Tooltip from 'react-tooltip-lite';

import './strokeSizeUI.scss';

import { STROKE_SCALES, TOOLTIP_PROPS, SHORTCUT_ACTIONS } from '../../../shared/constants';
import { tooltipShortcutTemplate } from '../../../shared/utilities';

import ToolPanelContext from '../../../context/toolPanel/toolPanelContext';
import ShortcutsContext from '../../../context/shortcuts/shortcutsContext';

function StrokeSizeUI() {
  const { strokeSize, setStrokeSize } = useContext(ToolPanelContext);
  const { shortcuts } = useContext(ShortcutsContext);

  return (
    <Tooltip
      content={[
        <p key="penSize">Pen size</p>,
        <p key="tooltip-shortcut">
          Down:{' '}
          <span className="tooltip-shortcut">
            {tooltipShortcutTemplate(shortcuts, SHORTCUT_ACTIONS.strokeSizeDown)}
          </span>{' '}
          Up:{' '}
          <span className="tooltip-shortcut">
            {tooltipShortcutTemplate(shortcuts, SHORTCUT_ACTIONS.strokeSizeUp)}
          </span>
        </p>
      ]}
      direction={TOOLTIP_PROPS.directions.up}
      className="stroke-size-wrapper__tooltip"
      arrowSize={TOOLTIP_PROPS.arrowSize}
      padding={TOOLTIP_PROPS.padding}
      hoverDelay={TOOLTIP_PROPS.delay}
    >
      <div className="stroke-size-wrapper">
        {STROKE_SCALES.map((scale) => (
          <div
            key={`stroke-size-${scale}`}
            className={`stroke-size stroke-size--${scale} ${
              strokeSize === scale ? 'stroke-size--selected' : ''
            }`}
            onClick={() => setStrokeSize(scale)}
          ></div>
        ))}
      </div>
    </Tooltip>
  );
}

export default StrokeSizeUI;
