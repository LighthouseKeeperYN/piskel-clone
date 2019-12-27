import React from 'react';

import './framePanel.scss';

import FrameWindow from './frameWindow/FrameWindow';
import AddFrameUI from './addFrameUI/AddFrameUI';

function FramePanel() {
  return (
    <div className="framePanel">
      <FrameWindow number={1} />
      <AddFrameUI />
    </div>
  );
}

export default FramePanel;
