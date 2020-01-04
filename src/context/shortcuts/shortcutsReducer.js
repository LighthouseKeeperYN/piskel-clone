import { SET_SHORTCUT, TOGGLE_SHORTCUTS_MODAL_VISIBILITY } from '../types';

export default (state, action) => {
  const stateCopy = { ...state };

  switch (action.type) {
    case SET_SHORTCUT:
      stateCopy.shortcuts[action.payload.action] = action.payload.key;
      return stateCopy;
    case TOGGLE_SHORTCUTS_MODAL_VISIBILITY:
      if (state.shortcutsModalVisibility) return { ...state, shortcutsModalVisibility: false };
      else return { ...state, shortcutsModalVisibility: true };
    default:
      return state;
  }
};
