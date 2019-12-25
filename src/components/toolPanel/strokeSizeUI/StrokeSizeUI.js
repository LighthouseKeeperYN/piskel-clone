import React, { Fragment, useContext } from 'react';

import './strokeSizeUI.scss';

import { STROKE_SCALE } from '../../../constants';
import UIContext from '../../../context/ui/uiContext';

function StrokeSizeUI() {
  const uiContext = useContext(UIContext);

  return (
    <Fragment>
      {Object.values(STROKE_SCALE).map((scale) => (
        <div
          key={`stroke-size-${scale}`}
          className={`stroke-size stroke-size--${scale} ${uiContext.strokeSize === scale &&
            'stroke-size--selected'}`}
          onClick={() => uiContext.setStrokeSize(scale)}
        ></div>
      ))}
    </Fragment>
  );
}

export default StrokeSizeUI;
