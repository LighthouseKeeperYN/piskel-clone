import React, { useContext } from 'react';
import Tooltip from 'react-tooltip-lite';

import './strokeSizeUI.scss';

import { STROKE_SCALES, TOOLTIP_PROPS } from '../../../shared/constants';

import ToolPanelContext from '../../../context/toolPanel/toolPanelContext';

function StrokeSizeUI() {
  const { strokeSize, setStrokeSize } = useContext(ToolPanelContext);

  return (
    <Tooltip
      content="Pen size"
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
        {/* {Object.values(STROKE_SCALE).map((scale) => (
          <div
            key={`stroke-size-${scale}`}
            className={`stroke-size stroke-size--${scale} ${
              strokeSize === scale ? 'stroke-size--selected' : ''
            }`}
            onClick={() => setStrokeSize(scale)}
          ></div>
        ))} */}
      </div>
    </Tooltip>
  );
}

export default StrokeSizeUI;
