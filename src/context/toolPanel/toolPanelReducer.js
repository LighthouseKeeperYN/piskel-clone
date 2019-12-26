import {
  SET_STROKE_SIZE,
  SET_TOOL_TYPE,
  SET_COLOR_PRIMARY,
  SET_COLOR_SECONDARY,
  SWAP_SELECTED_COLORS,
  SHOW_COLOR_SELECTOR_PRIMARY,
  SHOW_COLOR_SELECTOR_SECONDARY,
  REMOVE_COLOR_SELECTORS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_STROKE_SIZE:
      return { ...state, strokeSize: action.payload };
    case SET_TOOL_TYPE:
      return { ...state, toolType: action.payload };
    case SET_COLOR_PRIMARY:
      return { ...state, colorPrimary: action.payload };
    case SET_COLOR_SECONDARY:
      return { ...state, colorSecondary: action.payload };
    case SWAP_SELECTED_COLORS:
      return { ...state, colorPrimary: state.colorSecondary, colorSecondary: state.colorPrimary };
    case SHOW_COLOR_SELECTOR_PRIMARY:
      return { ...state, colorSelectorPrimary: true };
    case SHOW_COLOR_SELECTOR_SECONDARY:
      return { ...state, colorSelectorSecondary: true };
    case REMOVE_COLOR_SELECTORS:
      return { ...state, colorSelectorPrimary: false, colorSelectorSecondary: false };
    default:
      return state;
  }
};
