import React, { Fragment, useContext } from 'react';

import './strokeSizeUI.scss';

import { STROKE_SCALE } from '../../../constants';
import ToolPanelContext from '../../../context/toolPanel/toolPanelContext';

function StrokeSizeUI() {
  const {strokeSize, setStrokeSize} = useContext(ToolPanelContext);

  return (
    <Fragment>
      {Object.values(STROKE_SCALE).map((scale) => (
        <div
          key={`stroke-size-${scale}`}
          className={`stroke-size stroke-size--${scale} ${strokeSize === scale &&
            'stroke-size--selected'}`}
          onClick={() => setStrokeSize(scale)}
        ></div>
      ))}
    </Fragment>
  );
}

export default StrokeSizeUI;
