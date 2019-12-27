import React, { useReducer } from 'react';

// import { DEFAULT_PIXEL_SIZE, DEFAULT_FRAME_RATE } from '../../shared/constants';
import { ADD_FRAME, UPDATE_FRAME } from '../types';

import FramePanelContext from './framePanelContext';
import FramePanelReducer from './framePanelReducer';

const FramePanelState = (props) => {
  const initialState = {
    frameCollection: [null],
    currentFrame: 0
  };

  const [state, dispatch] = useReducer(FramePanelReducer, initialState);

  const addFrame = (frame) => {
    dispatch({
      type: ADD_FRAME,
      payload: frame
    });
  };

  const updateFrame = (canvas) => {
    dispatch({
      type: UPDATE_FRAME,
      payload: canvas
    });
  };

  return (
    <FramePanelContext.Provider
      value={{
        frameCollection: state.frameCollection,
        currentFrame: state.currentFrame,
        addFrame,
        updateFrame
      }}
    >
      {props.children}
    </FramePanelContext.Provider>
  );
};

export default FramePanelState;
