import React, { useContext } from 'react';

import './customizeShortcutsButton.scss';

import ShortcutsContext from '../../../context/shortcuts/shortcutsContext';

function CustomizeShortcutsButton() {
  const { shortcutsModalVisibility, toggleShortcutsModalVisibility } = useContext(ShortcutsContext);

  const showModal = () => {
    if (!shortcutsModalVisibility) toggleShortcutsModalVisibility();
  };

  return <button className="customize-shortcuts-button" onClick={showModal}></button>;
}

export default CustomizeShortcutsButton;
