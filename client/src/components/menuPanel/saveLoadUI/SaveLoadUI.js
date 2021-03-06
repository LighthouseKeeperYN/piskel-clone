import React, { useContext } from 'react';

import './saveLoadUI.scss';

import MenuPanelContext from '../../../context/menuPanel/menuPanelContext';

import SaveModal from './SaveModal/SaveModal';
import LoadModal from './LoadModal/LoadModal';
import SaveLoadButton from './SaveLoadButton/SaveLoadButton';

function SaveLoadUI() {
  const { saveModalActive, loadModalActive, toggleSaveModal, toggleLoadModal } = useContext(
    MenuPanelContext,
  );

  return (
    <div className="save-load-wrapper">
      <SaveLoadButton text="Save project" action={toggleSaveModal} />
      <SaveLoadButton text="Load project" action={toggleLoadModal} />
      {saveModalActive && <SaveModal />}
      {loadModalActive && <LoadModal />}
    </div>
  );
}

export default SaveLoadUI;
