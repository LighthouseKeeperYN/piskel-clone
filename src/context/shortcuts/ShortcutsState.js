import React, { useReducer } from 'react';

import { TOOL_TYPES, SHORTCUT_ACTIONS } from '../../shared/constants';
import { SET_SHORTCUT } from '../types';

import ShortcutsContext from './shortcutsContext';
import ShortcutsReducer from './shortcutsReducer';

const ShortcutsState = (props) => {
  const initialState = {
    shortcuts: {
      [TOOL_TYPES.pen]: { key: 'p', ctrlKey: false, shiftKey: false, altKey: false },
      [TOOL_TYPES.stroke]: { key: 'l', ctrlKey: false, shiftKey: false, altKey: false },
      [TOOL_TYPES.bucket]: { key: 'b', ctrlKey: false, shiftKey: false, altKey: false },
      [TOOL_TYPES.bucketAll]: { key: 'a', ctrlKey: false, shiftKey: false, altKey: false },
      [TOOL_TYPES.eraser]: { key: 'e', ctrlKey: false, shiftKey: false, altKey: false },
      [TOOL_TYPES.colorPicker]: { key: 'o', ctrlKey: false, shiftKey: false, altKey: false },
      [SHORTCUT_ACTIONS.strokeSizeUp]: {
        key: ']',
        ctrlKey: false,
        shiftKey: false,
        altKey: false
      },
      [SHORTCUT_ACTIONS.strokeSizeDown]: {
        key: '[',
        ctrlKey: false,
        shiftKey: false,
        altKey: false
      },
      [SHORTCUT_ACTIONS.previousFrame]: {
        key: 'ArrowUp',
        ctrlKey: false,
        shiftKey: false,
        altKey: false
      },
      [SHORTCUT_ACTIONS.nextFrame]: {
        key: 'ArrowDown',
        ctrlKey: false,
        shiftKey: false,
        altKey: false
      },
      [SHORTCUT_ACTIONS.copyCurrentFrame]: {
        key: 'ArrowDown',
        ctrlKey: false,
        shiftKey: true,
        altKey: true
      },
      [SHORTCUT_ACTIONS.deleteCurrentFrame]: {
        key: 'Delete',
        ctrlKey: false,
        shiftKey: false,
        altKey: false
      },
      [SHORTCUT_ACTIONS.addNewFrame]: {
        key: 'n',
        ctrlKey: false,
        shiftKey: false,
        altKey: false
      },
      [SHORTCUT_ACTIONS.saveAsAPNG]: {
        key: 'p',
        ctrlKey: false,
        shiftKey: true,
        altKey: false
      },
      [SHORTCUT_ACTIONS.saveAsGIF]: { key: 'g', ctrlKey: false, shiftKey: true, altKey: false }
    }
  };

  const [state, dispatch] = useReducer(ShortcutsReducer, initialState);

  const setShortcut = (action, key, ctrlKey, shiftKey, altKey) => {
    dispatch({
      type: SET_SHORTCUT,
      payload: { action, key: { key, ctrlKey, shiftKey, altKey } }
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
