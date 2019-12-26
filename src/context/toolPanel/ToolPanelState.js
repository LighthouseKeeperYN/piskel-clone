import React, { useReducer } from 'react';

import { STROKE_SCALE, TOOL_TYPE, DEFAULT_COLORS } from '../../shared/constants';
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

import ToolPanelContext from './toolPanelContext';
import ToolPanelReducer from './toolPanelReducer';

const ToolPanelState = (props) => {
  const initialState = {
    strokeSize: STROKE_SCALE.x1,
    toolType: TOOL_TYPE.pen,
    colorPrimary: DEFAULT_COLORS.primary,
    colorSecondary: DEFAULT_COLORS.secondary,
    colorSelectorPrimary: false,
    colorSelectorSecondary: false,
  };

  const [state, dispatch] = useReducer(ToolPanelReducer, initialState);

  const setStrokeSize = (size) => {
    dispatch({
      type: SET_STROKE_SIZE,
      payload: size,
    });
  };

  const setToolType = (type) => {
    dispatch({
      type: SET_TOOL_TYPE,
      payload: type,
    });
  };

  const setColorPrimary = (color) => {
    dispatch({
      type: SET_COLOR_PRIMARY,
      payload: color,
    });
  };

  const setColorSecondary = (color) => {
    dispatch({
      type: SET_COLOR_SECONDARY,
      payload: color,
    });
  };

  const swapSelectedColors = () => dispatch({ type: SWAP_SELECTED_COLORS });

  const showColorSelectorPrimary = () => dispatch({ type: SHOW_COLOR_SELECTOR_PRIMARY });

  const showColorSelectorSecondary = () => dispatch({ type: SHOW_COLOR_SELECTOR_SECONDARY });

  const removeColorSelectors = () => dispatch({ type: REMOVE_COLOR_SELECTORS });

  return (
    <ToolPanelContext.Provider
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
        removeColorSelectors,
      }}
    >
      {props.children}
    </ToolPanelContext.Provider>
  );
};

export default ToolPanelState;
