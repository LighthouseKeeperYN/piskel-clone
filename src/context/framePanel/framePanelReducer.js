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
  const stateCopy = { ...state };
  const { from, to } = action.payload;
  const frameToMove = stateCopy.frameCollection[from];

  switch (action.type) {
    case ADD_FRAME:
      stateCopy.frameCollection.push(action.payload);
      stateCopy.currentFrame = stateCopy.frameCollection.length - 1;
      return stateCopy;

    case UPDATE_FRAME:
      stateCopy.frameCollection[stateCopy.currentFrame] = action.payload;
      return stateCopy;

    case CHANGE_INDEX:
      return { ...state, currentFrame: action.payload };

    case DELETE_FRAME:
      stateCopy.frameCollection.splice(action.payload, 1);
      if (stateCopy.currentFrame === stateCopy.frameCollection.length) {
        stateCopy.currentFrame -= 1;
      }
      return stateCopy;

    case DUPLICATE_FRAME:
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
      stateCopy.draggingFrame = null;

      stateCopy.frameCollection.splice(from, 1);
      stateCopy.frameCollection.splice(to, 0, frameToMove);

      if (stateCopy.currentFrame === from) {
        stateCopy.currentFrame = to;
      } else if (stateCopy.currentFrame <= to && stateCopy.currentFrame > from) {
        stateCopy.currentFrame -= 1;
      } else if (stateCopy.currentFrame >= to && stateCopy.currentFrame < from) {
        stateCopy.currentFrame += 1;
      }

      return stateCopy;

    default:
      return state;
  }
};
