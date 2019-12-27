import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './frameWindows.scss';

import { DEFAULT_CANVAS_SIZE } from '../../../shared/constants';

function FrameWindow({ number, imgData }) {
  const ref = useRef(null);

  if (imgData) {
    const ctx = ref.current.getContext('2d');
    ctx.clearRect(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE);
    ctx.putImageData(imgData, 0, 0);
  }

  return (
    <div className="frame-window">
      <span className="frame-number">{number}</span>
      <canvas
        className="frame-canvas"
        width={DEFAULT_CANVAS_SIZE}
        height={DEFAULT_CANVAS_SIZE}
        ref={ref}
      ></canvas>
    </div>
  );
}

FrameWindow.propTypes = {
  number: PropTypes.number.isRequired,
  imgData: PropTypes.any
};

export default FrameWindow;
