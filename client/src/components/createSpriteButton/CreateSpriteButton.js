import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './createSpriteButton.scss';

import { DEFAULT_FRAME_RATE, DEFAULT_PIXEL_SIZE } from '../../shared/constants';

import FramePanelContext from '../../context/framePanel/framePanelContext';
import DbStorageContext from '../../context/dbStorage/dbStorageContext';
import MenuPanelContext from '../../context/menuPanel/menuPanelContext';

function CreateSpriteButton() {
  const { resetFrames } = useContext(FramePanelContext);
  const { setCurrentProject } = useContext(DbStorageContext);
  const { setFrameRate, setPixelSize } = useContext(MenuPanelContext);

  const createNewProject = () => {
    resetFrames();
    setPixelSize(DEFAULT_PIXEL_SIZE);
    setFrameRate(DEFAULT_FRAME_RATE);
    setCurrentProject(null);
  };

  return (
    <Link to="/project">
      <button className="create-sprite-button" onClick={createNewProject}>
        Create new sprite
      </button>
    </Link>
  );
}

export default CreateSpriteButton;
