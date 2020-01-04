import React, { useReducer } from 'react';

import DEFAULT_SHORTCUTS from './defaultShortcuts';
import {
  SET_SHORTCUT,
  TOGGLE_SHORTCUTS_MODAL_VISIBILITY,
  TOGGLE_SHORTCUT_EDIT,
  SET_ALL_SHORTCUTS
} from '../types';

import ShortcutsContext from './shortcutsContext';
import ShortcutsReducer from './shortcutsReducer';

const ShortcutsState = (props) => {
  const initialState = {
    shortcutsModalVisibility: false,
    isShortcutBeingEdited: false,
    shortcuts: { ...DEFAULT_SHORTCUTS },
    defaultShortcuts: { ...DEFAULT_SHORTCUTS }
  };

  const [state, dispatch] = useReducer(ShortcutsReducer, initialState);

  const setAllShortcuts = (shortcuts) => {
    dispatch({
      type: SET_ALL_SHORTCUTS,
      payload: shortcuts
    });
  };

  const setShortcut = (action, key) => {
    dispatch({
      type: SET_SHORTCUT,
      payload: { action, key }
    });
  };

  const toggleShortcutsModalVisibility = () => {
    dispatch({
      type: TOGGLE_SHORTCUTS_MODAL_VISIBILITY,
      payload: {}
    });
  };

  const toggleShortcutEdit = () => {
    dispatch({
      type: TOGGLE_SHORTCUT_EDIT,
      payload: {}
    });
  };

  return (
    <ShortcutsContext.Provider
      value={{
        shortcuts: state.shortcuts,
        shortcutsModalVisibility: state.shortcutsModalVisibility,
        isShortcutBeingEdited: state.isShortcutBeingEdited,
        setShortcut,
        toggleShortcutsModalVisibility,
        toggleShortcutEdit,
        setAllShortcuts
      }}
    >
      {props.children}
    </ShortcutsContext.Provider>
  );
};

export default ShortcutsState;
