import { SET_PIXEL_SIZE, SET_FRAME_RATE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_PIXEL_SIZE:
      return { ...state, pixelSize: action.payload };
    case SET_FRAME_RATE:
      return { ...state, frameRate: action.payload };
    default:
      return state;
  }
};
