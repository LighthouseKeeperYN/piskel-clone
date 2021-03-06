import React, { useReducer } from 'react';

import {
  ADD_FRAME,
  UPDATE_FRAME,
  CHANGE_INDEX,
  DELETE_FRAME,
  DUPLICATE_FRAME,
  MOVE_FRAME,
  SET_DRAGGING_FRAME,
  CLEAR_FRAMES,
} from '../types';

import { DEFAULT_CANVAS_SIZE } from '../../shared/constants';

import FramePanelContext from './framePanelContext';
import FramePanelReducer from './framePanelReducer';

const FramePanelState = (props) => {
  const initialState = {
    frameCollection: [new ImageData(DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE)],
    currentFrame: 0,
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

  const clearFrames = () => {
    dispatch({
      type: CLEAR_FRAMES,
      payload: {},
    });
  };

  const resetFrames = () => {
    clearFrames();
    addFrame(new ImageData(DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE));
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
        clearFrames,
        resetFrames,
      }}
    >
      {props.children}
    </FramePanelContext.Provider>
  );
};

export default FramePanelState;
