import React, { useReducer } from 'react';

// import { DEFAULT_PIXEL_SIZE, DEFAULT_FRAME_RATE } from '../../shared/constants';
import { SET_CANVAS_CTX, SET_DRAWING } from '../types';

import CanvasContext from './canvasContext';
import CanvasReducer from './canvasReducer';

const CanvasState = (props) => {
  const initialState = {
    isDrawing: false,
    canvasCtx: null,
  };

  const [state, dispatch] = useReducer(CanvasReducer, initialState);

  const setCanvasCtx = (ref) => {
    dispatch({
      type: SET_CANVAS_CTX,
      payload: ref,
    });
  };

  const setDrawing = (bool) => {
    dispatch({
      type: SET_DRAWING,
      payload: bool,
    });
  };

  return (
    <CanvasContext.Provider
      value={{
        isDrawing: state.isDrawing,
        canvasCtx: state.canvasCtx,
        setCanvasCtx,
        setDrawing,
      }}
    >
      {props.children}
    </CanvasContext.Provider>
  );
};

export default CanvasState;
