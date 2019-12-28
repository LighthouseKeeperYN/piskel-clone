import React, { useContext } from 'react';

import './framePanel.scss';

import FrameWindow from './frameWindow/FrameWindow';
import AddFrameUI from './addFrameUI/AddFrameUI';

import FramePanelContext from '../../context/framePanel/framePanelContext';

function FramePanel() {
  const { frameCollection, currentFrame } = useContext(FramePanelContext);

  return (
    <div className="frame-panel">
      {frameCollection.map((frame, index) => (
        <FrameWindow
          key={`frame-${index}`}
          number={index + 1}
          imgData={frame}
          isSelected={currentFrame === index}
          index={index}
        />
      ))}

      <AddFrameUI />
    </div>
  );
}

export default FramePanel;
