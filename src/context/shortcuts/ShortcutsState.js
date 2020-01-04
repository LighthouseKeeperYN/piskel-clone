import React, { useReducer } from 'react';

import { TOOL_TYPES, SHORTCUT_ACTIONS } from '../../shared/constants';
import { SET_SHORTCUT, TOGGLE_SHORTCUTS_MODAL_VISIBILITY, TOGGLE_SHORTCUT_EDIT } from '../types';

import ShortcutsContext from './shortcutsContext';
import ShortcutsReducer from './shortcutsReducer';

const ShortcutsState = (props) => {
  const initialState = {
    shortcutsModalVisibility: false,
    isShortcutBeingEdited: false,
    shortcuts: {
      [TOOL_TYPES.pen]: { code: 'KeyP', ctrlKey: false, shiftKey: false, altKey: false },
      [TOOL_TYPES.stroke]: { code: 'KeyL', ctrlKey: false, shiftKey: false, altKey: false },
      [TOOL_TYPES.bucket]: { code: 'KeyB', ctrlKey: false, shiftKey: false, altKey: false },
      [TOOL_TYPES.bucketAll]: { code: 'KeyA', ctrlKey: false, shiftKey: false, altKey: false },
      [TOOL_TYPES.eraser]: { code: 'KeyE', ctrlKey: false, shiftKey: false, altKey: false },
      [TOOL_TYPES.colorPicker]: { code: 'KeyO', ctrlKey: false, shiftKey: false, altKey: false },
      [SHORTCUT_ACTIONS.strokeSizeUp]: {
        code: ']',
        ctrlKey: false,
        shiftKey: false,
        altKey: false
      },
      [SHORTCUT_ACTIONS.strokeSizeDown]: {
        code: '[',
        ctrlKey: false,
        shiftKey: false,
        altKey: false
      },
      [SHORTCUT_ACTIONS.previousFrame]: {
        code: 'ArrowUp',
        ctrlKey: false,
        shiftKey: false,
        altKey: false
      },
      [SHORTCUT_ACTIONS.nextFrame]: {
        code: 'ArrowDown',
        ctrlKey: false,
        shiftKey: false,
        altKey: false
      },
      [SHORTCUT_ACTIONS.copyCurrentFrame]: {
        code: 'ArrowDown',
        ctrlKey: false,
        shiftKey: true,
        altKey: true
      },
      [SHORTCUT_ACTIONS.deleteCurrentFrame]: {
        code: 'Delete',
        ctrlKey: false,
        shiftKey: false,
        altKey: false
      },
      [SHORTCUT_ACTIONS.addNewFrame]: {
        code: 'KeyN',
        ctrlKey: false,
        shiftKey: false,
        altKey: false
      },
      [SHORTCUT_ACTIONS.saveAsAPNG]: {
        code: 'KeyP',
        ctrlKey: false,
        shiftKey: true,
        altKey: false
      },
      [SHORTCUT_ACTIONS.saveAsGIF]: { code: 'KeyG', ctrlKey: false, shiftKey: true, altKey: false }
    }
  };

  const [state, dispatch] = useReducer(ShortcutsReducer, initialState);

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
        toggleShortcutEdit
      }}
    >
      {props.children}
    </ShortcutsContext.Provider>
  );
};

export default ShortcutsState;
