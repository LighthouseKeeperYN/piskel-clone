import React, { useContext, useEffect, useRef } from 'react';
import { useBeforeunload } from 'react-beforeunload';

import { DEFAULT_CANVAS_SIZE, LOCAL_STORAGE_KEY } from '../shared/constants';

import FramePanelContext from '../context/framePanel/framePanelContext';
import ToolPanelContext from '../context/toolPanel/toolPanelContext';
import ShortcutsContext from '../context/shortcuts/shortcutsContext';
import AnimationAndSettingsPanelContext from '../context/animationAndSettingsPanel/animationAndSettingsPanelContext';

function LocalStorageDownloader() {
  const { shortcuts, setAllShortcuts } = useContext(ShortcutsContext);
  const { addFrame, frameCollection, changeIndex, currentFrame, clearFrames } = useContext(
    FramePanelContext
  );
  const { setPixelSize, setFrameRate, pixelSize, frameRate } = useContext(
    AnimationAndSettingsPanelContext
  );
  const {
    strokeSize,
    toolType,
    colorPrimary,
    colorSecondary,
    setStrokeSize,
    setToolType,
    setColorPrimary,
    setColorSecondary
  } = useContext(ToolPanelContext);

  const canvasRef = useRef(null);

  const encodeFrame = (ctx, frame) => {
    ctx.putImageData(frame, 0, 0);
    return ctx.canvas.toDataURL('image/png');
  };

  const decodeFrame = (ctx, frame, currFrame) => {
    const img = new Image();
    img.src = frame;
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      addFrame(ctx.getImageData(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE));
      ctx.clearRect(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE);
      changeIndex(currFrame);
    };
  };

  const downloadDataFromLocalStorage = (canvas) => {
    const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (userData) {
      const ctx = canvas.getContext('2d');

      clearFrames();
      userData.frameCollection.forEach((frame) => {
        decodeFrame(ctx, frame, userData.currentFrame);
      });

      setPixelSize(userData.pixelSize);
      setFrameRate(userData.frameRate);
      setStrokeSize(userData.strokeSize);
      setToolType(userData.toolType);
      setColorPrimary(userData.colorPrimary);
      setColorSecondary(userData.colorSecondary);
      changeIndex(userData.currentFrame);
      setAllShortcuts(userData.shortcuts);
    }
  };

  const uploadDataToLocalStorage = (canvas) => {
    const ctx = canvas.getContext('2d');

    const encodedFrames = frameCollection.map((frame) => encodeFrame(ctx, frame));

    const userData = {
      frameCollection: encodedFrames,
      currentFrame,
      pixelSize,
      frameRate,
      strokeSize,
      toolType,
      colorPrimary,
      colorSecondary,
      shortcuts
    };

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
  };

  useEffect(() => {
    window.addEventListener('load', () => downloadDataFromLocalStorage(canvasRef.current));
    // eslint-disable-next-line
  }, []);

  useBeforeunload(() => uploadDataToLocalStorage(canvasRef.current));

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'none' }}
      width={DEFAULT_CANVAS_SIZE}
      height={DEFAULT_CANVAS_SIZE}
    ></canvas>
  );
}

export default LocalStorageDownloader;
