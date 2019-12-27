import { ADD_FRAME, UPDATE_FRAME } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_FRAME:
      return { ...state };
    case UPDATE_FRAME:
      const stateCopy = { ...state };
      stateCopy.frameCollection[stateCopy.currentFrame] = action.payload;
      return stateCopy;
    default:
      return state;
  }
};
