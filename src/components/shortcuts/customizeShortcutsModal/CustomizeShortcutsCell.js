import React, { useRef, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from 'use-onclickoutside';
import EventListener from 'react-event-listener';

import { ACTION_DESCRIPTIONS } from '../../../shared/constants';

import ShortcutsContext from '../../../context/shortcuts/shortcutsContext';

function CustomizeShortcutsCell({ action, shortcut }) {
  const { isShortcutBeingEdited, toggleShortcutEdit, setShortcut,shortcuts } = useContext(ShortcutsContext);
  const [isEditing, setIsEditing] = useState(false);

  const ref = useRef(null);

  const toggleEditOFF = () => {
    if (isEditing) {
      toggleShortcutEdit();
      setIsEditing(false);
    }
  };

  const toggleEditON = () => {
    if (!isShortcutBeingEdited) {
      toggleShortcutEdit();
      setIsEditing(true);
    }
  };

  const setNewShortcutAndToggleEditOFF = (e) => {
    const keyPressed = {
      key: e.key.length === 1 ? e.key.toLowerCase() : e.key,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      altKey: e.altKey
    };

    setShortcut(action, keyPressed);

    toggleShortcutEdit();
    setIsEditing(false);
  };

  useOnClickOutside(ref, toggleEditOFF);


  return (
    <div className="customize-shortcuts-cell" ref={ref} onClick={toggleEditON}>
      <p className="customize-shortcuts-cell__action">{ACTION_DESCRIPTIONS[action]}:</p>
      <p className="customize-shortcuts-cell__shortcut">
        {isEditing ? 'Choose new shortcut' : shortcut}
      </p>
      {isEditing && <EventListener target="window" onKeyUp={setNewShortcutAndToggleEditOFF} />}
    </div>
  );
}

CustomizeShortcutsCell.propTypes = {
  action: PropTypes.string.isRequired,
  shortcut: PropTypes.string.isRequired
};

export default CustomizeShortcutsCell;
