import React, { useReducer } from 'react';

import { STROKE_SCALE, TOOL_TYPE } from '../../constants';
import { SET_STROKE_SIZE, SET_TOOL_TYPE } from '../types';

import UIContext from './uiContext';
import UIReducer from './uiReducer';

const UIState = (props) => {
  const initialState = { strokeSize: STROKE_SCALE.x1, toolType: TOOL_TYPE.pen };

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

  return (
    <UIContext.Provider
      value={{
        strokeSize: state.strokeSize,
        toolType: state.toolType,
        setStrokeSize,
        setToolType
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};

export default UIState;
