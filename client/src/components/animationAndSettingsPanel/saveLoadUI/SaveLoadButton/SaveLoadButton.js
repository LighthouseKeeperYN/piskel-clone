import React from 'react';
import PropTypes from 'prop-types';

import './saveLoadButton.scss';

function SaveLoadButton({ text, action }) {
  return (
    <button className="save-load-button" onClick={action}>
      {text}
    </button>
  );
}

SaveLoadButton.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func.isRequired,
};

export default SaveLoadButton;
