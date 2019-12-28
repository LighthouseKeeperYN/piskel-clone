import { ADD_FRAME, UPDATE_FRAME, CHANGE_INDEX, DELETE_FRAME } from '../types';

export default (state, action) => {
  let stateCopy;
  switch (action.type) {
    case ADD_FRAME:
      stateCopy = { ...state };
      stateCopy.frameCollection.push(action.payload);
      stateCopy.currentFrame += 1;
      return stateCopy;
    case UPDATE_FRAME:
      stateCopy = { ...state };
      stateCopy.frameCollection[stateCopy.currentFrame] = action.payload;
      return stateCopy;
    case CHANGE_INDEX:
      return { ...state, currentFrame: action.payload };
    case DELETE_FRAME:
      stateCopy = { ...state };
      stateCopy.frameCollection.splice(action.payload, 1);
      if (stateCopy.currentFrame === stateCopy.frameCollection.length) {
        stateCopy.currentFrame -= 1;
      }
      return stateCopy;
    default:
      return state;
  }
};
