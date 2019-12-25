import { SET_STROKE_SIZE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_STROKE_SIZE:
      return {
        ...state,
        strokeSize: action.payload
      };
    default:
      return state;
  }
};
