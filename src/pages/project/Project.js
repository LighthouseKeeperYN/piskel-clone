import React from 'react';

import './project.scss';

import Canvas from '../../components/canvas/Canvas';
import ToolPanel from '../../components/toolPanel/ToolPanel';
import AnimationAndSettingsPanel from '../../components/animationAndSettingsPanel/AnimationAndSettingsPanel';
import FramePanel from '../../components/framePanel/FramePanel';

function Project() {
  return (
    <div className="project-wrapper">
      <ToolPanel />
      <FramePanel />
      <Canvas />
      <AnimationAndSettingsPanel />
    </div>
  );
}

export default Project;
