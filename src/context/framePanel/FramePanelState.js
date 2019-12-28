import React, { useReducer } from 'react';

// import { DEFAULT_PIXEL_SIZE, DEFAULT_FRAME_RATE } from '../../shared/constants';
import { ADD_FRAME, UPDATE_FRAME, CHANGE_INDEX } from '../types';

import FramePanelContext from './framePanelContext';
import FramePanelReducer from './framePanelReducer';

const FramePanelState = (props) => {
  const initialState = {
    frameCollection: [],
    currentFrame: -1,
  };

  const [state, dispatch] = useReducer(FramePanelReducer, initialState);

  const addFrame = (frame) => {
    dispatch({
      type: ADD_FRAME,
      payload: frame,
    });
  };

  const updateFrame = (canvas) => {
    dispatch({
      type: UPDATE_FRAME,
      payload: canvas,
    });
  };

  const changeIndex = (index) => {
    dispatch({
      type: CHANGE_INDEX,
      payload: index,
    });
  }

  return (
    <FramePanelContext.Provider
      value={{
        frameCollection: state.frameCollection,
        currentFrame: state.currentFrame,
        addFrame,
        updateFrame,
        changeIndex
      }}
    >
      {props.children}
    </FramePanelContext.Provider>
  );
};

export default FramePanelState;
