import React, { useReducer } from 'react';

// import { DEFAULT_PIXEL_SIZE, DEFAULT_FRAME_RATE } from '../../shared/constants';
import { SET_DRAWING } from '../types';

import CanvasContext from './canvasContext';
import CanvasReducer from './canvasReducer';

const CanvasState = (props) => {
  const initialState = {
    isDrawing: false
  };

  const [state, dispatch] = useReducer(CanvasReducer, initialState);

  const setDrawing = (bool) => {
    dispatch({
      type: SET_DRAWING,
      payload: bool
    });
  };

  return (
    <CanvasContext.Provider
      value={{
        isDrawing: state.isDrawing,
        setDrawing
      }}
    >
      {props.children}
    </CanvasContext.Provider>
  );
};

export default CanvasState;
