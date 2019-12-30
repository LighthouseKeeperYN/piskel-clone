import React, { useReducer } from 'react';

// import { DEFAULT_PIXEL_SIZE, DEFAULT_FRAME_RATE } from '../../shared/constants';
import {
  ADD_FRAME,
  UPDATE_FRAME,
  CHANGE_INDEX,
  DELETE_FRAME,
  DUPLICATE_FRAME,
  MOVE_FRAME,
  SET_DRAGGING_FRAME,
} from '../types';

import FramePanelContext from './framePanelContext';
import FramePanelReducer from './framePanelReducer';

const FramePanelState = (props) => {
  const initialState = {
    frameCollection: [],
    currentFrame: -1,
    draggingFrame: null,
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
  };

  const deleteFrame = (index) => {
    dispatch({
      type: DELETE_FRAME,
      payload: index,
    });
  };

  const duplicateFrame = (index) => {
    dispatch({
      type: DUPLICATE_FRAME,
      payload: index,
    });
  };

  const moveFrame = (from, to) => {
    dispatch({
      type: MOVE_FRAME,
      payload: { from, to },
    });
  };

  const setDraggingFrame = (index) => {
    dispatch({
      type: SET_DRAGGING_FRAME,
      payload: index,
    });
  };

  return (
    <FramePanelContext.Provider
      value={{
        frameCollection: state.frameCollection,
        currentFrame: state.currentFrame,
        draggingFrame: state.draggingFrame,
        addFrame,
        updateFrame,
        changeIndex,
        deleteFrame,
        duplicateFrame,
        moveFrame,
        setDraggingFrame,
      }}
    >
      {props.children}
    </FramePanelContext.Provider>
  );
};

export default FramePanelState;
