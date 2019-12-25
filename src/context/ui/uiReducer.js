import { SET_STROKE_SIZE, SET_TOOL_TYPE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_STROKE_SIZE:
      return {
        ...state,
        strokeSize: action.payload
      };
    case SET_TOOL_TYPE:
      return {
        ...state,
        toolType: action.payload
      };
    default:
      return state;
  }
};
