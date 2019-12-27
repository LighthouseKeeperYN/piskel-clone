import { ADD_FRAME, UPDATE_FRAME } from '../types';

export default (state, action) => {
  let stateCopy;
  switch (action.type) {
    case ADD_FRAME:
      stateCopy = { ...state };
      stateCopy.frameCollection.push(null);
      stateCopy.currentFrame += 1;
      return stateCopy;
    case UPDATE_FRAME:
      stateCopy = { ...state };
      stateCopy.frameCollection[stateCopy.currentFrame] = action.payload;
      return stateCopy;
    default:
      return state;
  }
};
