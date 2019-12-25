import React, { useReducer } from 'react';

import STROKE_SCALE from '../../constants';

import UIContext from './uiContext';
import UIReducer from './uiReducer';
import { SET_STROKE_SIZE } from '../types';

const UIState = (props) => {
  const initialState = { strokeSize: STROKE_SCALE.x1 };

  const [state, dispatch] = useReducer(UIReducer, initialState);

  const setStrokeSize = (size) => {
    dispatch({
      type: SET_STROKE_SIZE,
      payload: size
    });
  };

  return (
    <UIContext.Provider
      value={{
        strokeSize: state.strokeSize,
        setStrokeSize
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};

export default UIState;
