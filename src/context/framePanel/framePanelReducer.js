import {
  ADD_FRAME,
  UPDATE_FRAME,
  CHANGE_INDEX,
  DELETE_FRAME,
  DUPLICATE_FRAME,
  MOVE_FRAME,
  SET_DRAGGING_FRAME
} from '../types';

export default (state, action) => {
  let stateCopy;
  switch (action.type) {
    case ADD_FRAME:
      stateCopy = { ...state };
      stateCopy.frameCollection.push(action.payload);
      stateCopy.currentFrame = stateCopy.frameCollection.length - 1;
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
    case DUPLICATE_FRAME:
      stateCopy = { ...state };
      stateCopy.frameCollection.splice(
        action.payload,
        0,
        stateCopy.frameCollection[action.payload]
      );
      if (stateCopy.currentFrame > action.payload) stateCopy.currentFrame += 1;
      return stateCopy;
    case SET_DRAGGING_FRAME:
      return { ...state, draggingFrame: action.payload };
    case MOVE_FRAME:
      stateCopy = { ...state };
      const frameToMove = stateCopy.frameCollection[action.payload.from];
      stateCopy.frameCollection.splice(action.payload.from, 1);
      stateCopy.frameCollection.splice(action.payload.to, 0, frameToMove);
      stateCopy.draggingFrame = null;
      if (stateCopy.currentFrame === action.payload.from) {
        stateCopy.currentFrame = action.payload.to;
      } else if (stateCopy.currentFrame === action.payload.to) {
        stateCopy.currentFrame = action.payload.from;
      }
      return stateCopy;
    default:
      return state;
  }
};
