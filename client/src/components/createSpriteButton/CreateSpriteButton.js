import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './createSpriteButton.scss';

import FramePanelContext from '../../context/framePanel/framePanelContext';

function CreateSpriteButton() {
  const { resetFrames } = useContext(FramePanelContext);

  const createNewProject = () => {
    resetFrames();
  };

  return (
    <Link to="/project">
      <button className="create-sprite-button">Create new sprite</button>
    </Link>
  );
}

export default CreateSpriteButton;
