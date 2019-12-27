import React, { useContext } from 'react';

import './framePanel.scss';

import FrameWindow from './frameWindow/FrameWindow';
import AddFrameUI from './addFrameUI/AddFrameUI';

import FramePanelContext from '../../context/framePanel/framePanelContext';

function FramePanel() {
  const { frameCollection } = useContext(FramePanelContext);
  console.log('p',frameCollection[0]);
  return (
    <div className="framePanel">
      <FrameWindow number={1} canvasRef={frameCollection[0]} />
      <AddFrameUI />
    </div>
  );
}

export default FramePanel;
