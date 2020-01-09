import { SET_PIXEL_SIZE, SET_FRAME_RATE, TOGGLE_SAVE_MODAL } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_PIXEL_SIZE:
      return { ...state, pixelSize: action.payload };
    case SET_FRAME_RATE:
      return { ...state, frameRate: action.payload };
    case TOGGLE_SAVE_MODAL:
      return { ...state, saveModalActive: !state.saveModalActive };
    default:
      return state;
  }
};
