import {
  SET_SHORTCUT,
  TOGGLE_SHORTCUTS_MODAL_VISIBILITY,
  TOGGLE_SHORTCUT_EDIT,
  SET_ALL_SHORTCUTS,
} from '../types';

export default (state, action) => {
  const stateCopy = { ...state };

  switch (action.type) {
    case SET_ALL_SHORTCUTS:
      if (!action.payload) return { ...state, shortcuts: { ...state.defaultShortcuts } };
      return { ...state, shortcuts: { ...action.payload } };
    case SET_SHORTCUT:
      stateCopy.shortcuts[action.payload.action] = action.payload.key;
      return stateCopy;
    case TOGGLE_SHORTCUTS_MODAL_VISIBILITY:
      if (state.shortcutsModalVisibility) return { ...state, shortcutsModalVisibility: false };
      return { ...state, shortcutsModalVisibility: true };
    case TOGGLE_SHORTCUT_EDIT:
      if (state.isShortcutBeingEdited) return { ...state, isShortcutBeingEdited: false };
      return { ...state, isShortcutBeingEdited: true };
    default:
      return state;
  }
};
