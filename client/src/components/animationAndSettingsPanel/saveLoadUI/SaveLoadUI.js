import React, { useContext } from 'react';

import './saveLoadUI.scss';

import AnimationAndSettingsPanelContext from '../../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';

import SaveModal from './SaveModal/SaveModal';
import SaveLoadButton from './SaveLoadButton/SaveLoadButton';
function SaveLoadUI() {
  const { saveModalActive, toggleSaveModal } = useContext(AnimationAndSettingsPanelContext);

  return (
    <div className="save-load-wrapper">
      <SaveLoadButton text="Save project" action={toggleSaveModal} />
      <SaveLoadButton text="Load project" action={toggleSaveModal} />
      {saveModalActive && <SaveModal />}
    </div>
  );
}

export default SaveLoadUI;
