import React, { useContext } from 'react';

import './saveLoadUI.scss';

// import DbStorageContext from '../../../context/dbStorage/dbStorageContext';
import AnimationAndSettingsPanelContext from '../../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';

import SaveModal from './SaveModal/SaveModal';
import LoadModal from './LoadModal/LoadModal';
import SaveLoadButton from './SaveLoadButton/SaveLoadButton';

function SaveLoadUI() {
  // const { /* projects, */ currentProject, /* updateProject  */} = useContext(DbStorageContext);
  const { saveModalActive, loadModalActive, toggleSaveModal, toggleLoadModal } = useContext(
    AnimationAndSettingsPanelContext
  );

  // const isNewProject = (currProject) => {
  //   if (currProject) return false;
  //   return projects.every((project) => project._id !== currProject._id);
  // };



  return (
    <div className="save-load-wrapper">
      <SaveLoadButton
        text="Save project"
        action={/* isNewProject(currentProject) ? */ toggleSaveModal /* : updateCurrentProject */}
      />
      <SaveLoadButton text="Load project" action={toggleLoadModal} />
      {saveModalActive && <SaveModal />}
      {loadModalActive && <LoadModal />}
    </div>
  );
}

export default SaveLoadUI;
