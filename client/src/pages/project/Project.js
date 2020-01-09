import React from 'react';

import './project.scss';

// import AnimationAndSettingsPanelContext from '../../../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';

import Canvas from '../../components/canvas/Canvas';
import ToolPanel from '../../components/toolPanel/ToolPanel';
import AnimationAndSettingsPanel from '../../components/animationAndSettingsPanel/AnimationAndSettingsPanel';
import FramePanel from '../../components/framePanel/FramePanel';
import CustomizeShortcutsButton from '../../components/shortcuts/customizeShortcutsButton/CustomizeShortcutsButton';
import CustomizeShortcutsModal from '../../components/shortcuts/customizeShortcutsModal/CustomizeShortcutsModal';
// import SaveModal from '../../components/animationAndSettingsPanel/saveLoadUI/'

function Project() {
  // const { saveModalActive } = useContext(AnimationAndSettingsPanelContext);

  return (
    <div className="project-wrapper">
      {/* {saveModalActive && } */}

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
