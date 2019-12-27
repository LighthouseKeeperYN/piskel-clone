import React from 'react';

import './frameWindows.scss';

function FrameWindow({ number }) {
  return (
    <div className="frame-window">
      <span className="frame-number">{number}</span>
      <canvas className="frame-canvas" width={128} height={128}></canvas>
    </div>
  );
}

export default FrameWindow;
