import React, { Fragment, useContext } from 'react';

import './strokeSizeUI.scss';

import STROKE_SCALE from '../../../../constants';
import UIContext from '../../../../context/ui/uiContext';

function StrokeSizeUI() {
  const uiContext = useContext(UIContext);
  console.log(uiContext.strokeSize);

  return (
    <Fragment>
      <div
        className="stroke-size stroke-size--1"
        onClick={() => uiContext.setStrokeSize(STROKE_SCALE.XS)}
      ></div>
      <div
        className="stroke-size stroke-size--2"
        onClick={() => uiContext.setStrokeSize(STROKE_SCALE.S)}
      ></div>
      <div
        className="stroke-size stroke-size--3"
        onClick={() => uiContext.setStrokeSize(STROKE_SCALE.M)}
      ></div>
      <div
        className="stroke-size stroke-size--4"
        onClick={() => uiContext.setStrokeSize(STROKE_SCALE.L)}
      ></div>
    </Fragment>
  );
}

export default StrokeSizeUI;
