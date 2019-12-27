import { SET_CANVAS_CTX, SET_DRAWING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_CANVAS_CTX:
      console.log('>>>>>>>>', state, action.payload);
      return { ...state, canvasCtx: action.payload };
    case SET_DRAWING:
      return { ...state, isDrawing: action.payload };
    default:
      return state;
  }
};
