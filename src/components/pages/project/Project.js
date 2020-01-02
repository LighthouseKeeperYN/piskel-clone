import React from 'react';

import './project.scss';

import Canvas from '../../canvas/Canvas';
import ToolPanel from '../../toolPanel/ToolPanel';
import AnimationAndSettingsPanel from '../../animationAndSettingsPanel/AnimationAndSettingsPanel';
import FramePanel from '../../framePanel/FramePanel';

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
