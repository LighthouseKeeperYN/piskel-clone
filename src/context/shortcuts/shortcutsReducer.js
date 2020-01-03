import { SET_SHORTCUT } from '../types';

export default (state, action) => {
  const stateCopy = { ...state };

  switch (action.type) {
    case SET_SHORTCUT:
      stateCopy.shortcuts[action.payload.action] = action.payload.key;
      return stateCopy;
    default:
      return state;
  }
};
