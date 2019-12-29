import React, { useContext } from 'react';
import Draggable from 'react-draggable';

import './framePanel.scss';

import FrameWindow from './frameWindow/FrameWindow';
import AddFrameUI from './addFrameUI/AddFrameUI';

import FramePanelContext from '../../context/framePanel/framePanelContext';

function FramePanel() {
  const { frameCollection, currentFrame } = useContext(FramePanelContext);
  return (
    <div className="frame-panel">
      {frameCollection.map((frame, index) => (
        // <Draggable
        //   axis="y"
        //   key={`draggable-frame-${index}`}
        //   defaultPosition={{ x: 0, y: 0 }}
        //   position={null}
        //   grid={[25, 25]}
        //   scale={1}
        //   onDrag={() => {
        //     console.log('onDrag');
        //   }}
        // >
        <FrameWindow key={`frame-${index}`} imgData={frame} index={index}/>
        // </Draggable>
      ))}

      <AddFrameUI />
    </div>
  );
}

export default FramePanel;
