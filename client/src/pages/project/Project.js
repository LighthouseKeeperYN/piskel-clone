import React from 'react';

import './project.scss';

import Canvas from '../../components/canvas/Canvas';
import ToolPanel from '../../components/toolPanel/ToolPanel';
import AnimationAndSettingsPanel from '../../components/animationAndSettingsPanel/AnimationAndSettingsPanel';
import FramePanel from '../../components/framePanel/FramePanel';
import CustomizeShortcutsButton from '../../components/shortcuts/customizeShortcutsButton/CustomizeShortcutsButton';
import CustomizeShortcutsModal from '../../components/shortcuts/customizeShortcutsModal/CustomizeShortcutsModal';

function Project() {
  return (
    <div className="project-wrapper">
      <ToolPanel />
      <FramePanel />
      <Canvas />
      <AnimationAndSettingsPanel />
      <CustomizeShortcutsButton />
      <CustomizeShortcutsModal />
    </div>
  );
}

export default Project;
