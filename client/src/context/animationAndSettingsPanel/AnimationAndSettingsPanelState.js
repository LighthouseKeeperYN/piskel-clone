import React, { useReducer } from 'react';

import { DEFAULT_PIXEL_SIZE, DEFAULT_FRAME_RATE } from '../../shared/constants';
import { SET_PIXEL_SIZE, SET_FRAME_RATE, TOGGLE_SAVE_MODAL } from '../types';

import AnimationAndSettingsPanelContext from './animationAndSettingsPanelContext';
import AnimationAndSettingsPanelReducer from './animationAndSettingsPanelReducer';

const AnimationAndSettingsPanelState = (props) => {
  const initialState = {
    pixelSize: DEFAULT_PIXEL_SIZE,
    frameRate: DEFAULT_FRAME_RATE,
    saveModalActive: false
  };

  const [state, dispatch] = useReducer(AnimationAndSettingsPanelReducer, initialState);

  const setPixelSize = (size) => {
    dispatch({
      type: SET_PIXEL_SIZE,
      payload: size
    });
  };

  const setFrameRate = (rate) => {
    dispatch({
      type: SET_FRAME_RATE,
      payload: rate
    });
  };

  const toggleSaveModal = () => {
    dispatch({ type: TOGGLE_SAVE_MODAL });
  };

  return (
    <AnimationAndSettingsPanelContext.Provider
      value={{
        pixelSize: state.pixelSize,
        frameRate: state.frameRate,
        saveModalActive: state.saveModalActive,
        setPixelSize,
        setFrameRate,
        toggleSaveModal
      }}
    >
      {props.children}
    </AnimationAndSettingsPanelContext.Provider>
  );
};

export default AnimationAndSettingsPanelState;
