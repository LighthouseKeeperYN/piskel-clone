import React from 'react';
import { Link } from 'react-router-dom';

import './createSpriteButton.scss';

function CreateSpriteButton() {
  return (
    <Link to="/project">
      <button className="create-sprite-button">Create Sprite</button>
    </Link>
  );
}

export default CreateSpriteButton;
