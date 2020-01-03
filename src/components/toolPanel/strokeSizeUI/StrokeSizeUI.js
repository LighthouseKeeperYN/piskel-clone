import React, { useContext } from 'react';
import Tooltip from 'react-tooltip-lite';

import './strokeSizeUI.scss';

import { STROKE_SCALE } from '../../../shared/constants';

import ToolPanelContext from '../../../context/toolPanel/toolPanelContext';

function StrokeSizeUI() {
  const { strokeSize, setStrokeSize } = useContext(ToolPanelContext);

  return (
    <Tooltip
      content="Pen size"
      direction="up"
      className="stroke-size-wrapper__tooltip"
      arrowSize={5}
      padding={5}
      hoverDelay={0}
    >
      <div className="stroke-size-wrapper">
        {Object.values(STROKE_SCALE).map((scale) => (
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
