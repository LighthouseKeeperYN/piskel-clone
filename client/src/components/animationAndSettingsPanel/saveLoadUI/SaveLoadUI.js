import React/* , { useContext } */ from 'react';

import './saveLoadUI.scss';

// import AnimationAndSettingsPanelContext from '../../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';

import SaveModal from './SaveModal/SaveModal';

function SaveLoadUI() {
  // const { saveModalActive } = useContext(AnimationAndSettingsPanelContext);

  return <div>{true && <SaveModal />}</div>;
}

export default SaveLoadUI;
