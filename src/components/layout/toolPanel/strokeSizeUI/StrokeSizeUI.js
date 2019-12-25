import React, { Fragment, useContext } from 'react';

import './strokeSizeUI.scss';

import { STROKE_SCALE } from '../../../../constants';
import UIContext from '../../../../context/ui/uiContext';

function StrokeSizeUI() {
  const uiContext = useContext(UIContext);

  return (
    <Fragment>
      <div
        className={`stroke-size stroke-size--1 ${uiContext.strokeSize === STROKE_SCALE.x1 &&
          'stroke-size--selected'}`}
        onClick={() => uiContext.setStrokeSize(STROKE_SCALE.x1)}
      ></div>
      <div
        className={`stroke-size stroke-size--2 ${uiContext.strokeSize === STROKE_SCALE.x2 &&
          'stroke-size--selected'}`}
        onClick={() => uiContext.setStrokeSize(STROKE_SCALE.x2)}
      ></div>
      <div
        className={`stroke-size stroke-size--3 ${uiContext.strokeSize === STROKE_SCALE.x3 &&
          'stroke-size--selected'}`}
        onClick={() => uiContext.setStrokeSize(STROKE_SCALE.x3)}
      ></div>
      <div
        className={`stroke-size stroke-size--4 ${uiContext.strokeSize === STROKE_SCALE.x4 &&
          'stroke-size--selected'}`}
        onClick={() => uiContext.setStrokeSize(STROKE_SCALE.x4)}
      ></div>
    </Fragment>
  );
}

export default StrokeSizeUI;
