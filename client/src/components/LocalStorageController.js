import React, { useContext, useEffect, Fragment } from 'react';
import { useBeforeunload } from 'react-beforeunload';

import { LOCAL_STORAGE_KEY } from '../shared/constants';
import { encodeFrame, decodeFramesAll } from '../shared/utilities';

import FramePanelContext from '../context/framePanel/framePanelContext';
import ToolPanelContext from '../context/toolPanel/toolPanelContext';
import ShortcutsContext from '../context/shortcuts/shortcutsContext';
import DbStorageContext from '../context/dbStorage/dbStorageContext';
import MenuPanelContext from '../context/menuPanel/menuPanelContext';

function LocalStorageDownloader() {
  const { currentProject, setCurrentProject } = useContext(DbStorageContext);
  const { shortcuts, setAllShortcuts } = useContext(ShortcutsContext);
  const { addFrame, frameCollection, changeIndex, currentFrame, clearFrames } = useContext(
    FramePanelContext,
  );
  const { setPixelSize, setFrameRate, pixelSize, frameRate } = useContext(MenuPanelContext);
  const {
    strokeSize,
    toolType,
    colorPrimary,
    colorSecondary,
    setStrokeSize,
    setToolType,
    setColorPrimary,
    setColorSecondary,
  } = useContext(ToolPanelContext);

  const downloadDataFromLocalStorage = () => {
    const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (userData) {
      clearFrames();

      setPixelSize(userData.pixelSize);
      decodeFramesAll(userData.frameCollection)
        .then((frames) => frames.forEach((frame) => addFrame(frame)));
      setFrameRate(userData.frameRate);
      setStrokeSize(userData.strokeSize);
      setToolType(userData.toolType);
      setColorPrimary(userData.colorPrimary);
      setColorSecondary(userData.colorSecondary);
      changeIndex(userData.currentFrame);
      setAllShortcuts(userData.shortcuts);
      setCurrentProject(userData.currentProject);
    }
  };

  const uploadDataToLocalStorage = () => {
    const encodedFrames = frameCollection.map((frame) => encodeFrame(frame));

    const userData = {
      frameCollection: encodedFrames,
      currentFrame,
      pixelSize,
      frameRate,
      strokeSize,
      toolType,
      colorPrimary,
      colorSecondary,
      shortcuts,
      currentProject,
    };

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
  };

  useEffect(() => {
    window.addEventListener('load', downloadDataFromLocalStorage);
    // eslint-disable-next-line
  }, []);

  useBeforeunload(uploadDataToLocalStorage);

  return <Fragment></Fragment>;
}

export default LocalStorageDownloader;
