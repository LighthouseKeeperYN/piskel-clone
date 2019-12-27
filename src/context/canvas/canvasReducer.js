import { SET_DRAWING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_DRAWING:
      return { ...state, isDrawing: action.payload };
    default:
      return state;
  }
};
