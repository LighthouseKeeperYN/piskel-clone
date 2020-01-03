import React, { useReducer } from 'react';

import { TOOL_TYPES, SHORTCUT_ACTIONS } from '../../shared/constants';
import { SET_SHORTCUT } from '../types';

import ShortcutsContext from './shortcutsContext';
import ShortcutsReducer from './shortcutsReducer';

const ShortcutsState = (props) => {
  const initialState = {
    shortcuts: {
      [TOOL_TYPES.pen]: { code: 'KeyP', ctrlKey: false, shiftKey: false, altKey: false },
      [TOOL_TYPES.stroke]: { code: 'KeyL', ctrlKey: false, shiftKey: false, altKey: false },
      [TOOL_TYPES.bucket]: { code: 'KeyB', ctrlKey: false, shiftKey: false, altKey: false },
      [TOOL_TYPES.bucketAll]: { code: 'KeyA', ctrlKey: false, shiftKey: false, altKey: false },
      [TOOL_TYPES.eraser]: { code: 'KeyE', ctrlKey: false, shiftKey: false, altKey: false },
      [TOOL_TYPES.colorPicker]: { code: 'KeyO', ctrlKey: false, shiftKey: false, altKey: false },
      [SHORTCUT_ACTIONS.strokeSizeUp]: {
        code: 'BracketRight',
        ctrlKey: false,
        shiftKey: false,
        altKey: false
      },
      [SHORTCUT_ACTIONS.strokeSizeDown]: {
        code: 'BracketLeft',
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

  const setShortcut = (action, code, ctrlKey, shiftKey, altKey) => {
    dispatch({
      type: SET_SHORTCUT,
      payload: { action, key: { code, ctrlKey, shiftKey, altKey } }
    });
  };

  return (
    <ShortcutsContext.Provider
      value={{
        shortcuts: state.shortcuts,
        setShortcut
      }}
    >
      {props.children}
    </ShortcutsContext.Provider>
  );
};

export default ShortcutsState;
