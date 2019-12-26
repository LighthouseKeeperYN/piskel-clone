import React, { useReducer } from 'react';

import { STROKE_SCALE, TOOL_TYPE, DEFAULT_COLORS } from '../../constants';
import {
  SET_STROKE_SIZE,
  SET_TOOL_TYPE,
  SET_COLOR_PRIMARY,
  SET_COLOR_SECONDARY,
  SWAP_SELECTED_COLORS,
  SHOW_COLOR_SELECTOR_PRIMARY,
  SHOW_COLOR_SELECTOR_SECONDARY,
  REMOVE_COLOR_SELECTORS
} from '../types';

import UIContext from './uiContext';
import UIReducer from './uiReducer';

const UIState = (props) => {
  const initialState = {
    strokeSize: STROKE_SCALE.x1,
    toolType: TOOL_TYPE.pen,
    colorPrimary: DEFAULT_COLORS.primary,
    colorSecondary: DEFAULT_COLORS.secondary,
    colorSelectorPrimary: false,
    colorSelectorSecondary: false
  };

  const [state, dispatch] = useReducer(UIReducer, initialState);

  const setStrokeSize = (size) => {
    dispatch({
      type: SET_STROKE_SIZE,
      payload: size
    });
  };

  const setToolType = (type) => {
    dispatch({
      type: SET_TOOL_TYPE,
      payload: type
    });
  };

  const setColorPrimary = (color) => {
    dispatch({
      type: SET_COLOR_PRIMARY,
      payload: color
    });
  };

  const setColorSecondary = (color) => {
    dispatch({
      type: SET_COLOR_SECONDARY,
      payload: color
    });
  };

  // const handleClickOutside = () => {

  // }

  const swapSelectedColors = () => dispatch({ type: SWAP_SELECTED_COLORS });

  const showColorSelectorPrimary = () => dispatch({ type: SHOW_COLOR_SELECTOR_PRIMARY });

  const showColorSelectorSecondary = () => dispatch({ type: SHOW_COLOR_SELECTOR_SECONDARY });

  const removeColorSelectors = () => dispatch({ type: REMOVE_COLOR_SELECTORS });

  return (
    <UIContext.Provider
      value={{
        strokeSize: state.strokeSize,
        toolType: state.toolType,
        colorPrimary: state.colorPrimary,
        colorSecondary: state.colorSecondary,
        colorSelectorPrimary: state.colorSelectorPrimary,
        colorSelectorSecondary: state.colorSelectorSecondary,
        setStrokeSize,
        setToolType,
        setColorPrimary,
        setColorSecondary,
        swapSelectedColors,
        showColorSelectorPrimary,
        showColorSelectorSecondary,
        removeColorSelectors
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};

export default UIState;
