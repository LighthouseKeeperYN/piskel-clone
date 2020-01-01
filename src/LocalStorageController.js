import React, { useContext, useEffect, useRef } from 'react';
import { useBeforeunload } from 'react-beforeunload';

import { DEFAULT_CANVAS_SIZE } from './shared/constants';

import FramePanelContext from './context/framePanel/framePanelContext';
import ToolPanelContext from './context/toolPanel/toolPanelContext';
import AnimationAndSettingsPanelContext from './context/animationAndSettingsPanel/animationAndSettingsPanelContext';

function LocalStorageDownloader() {
  const { addFrame, frameCollection, changeIndex, currentFrame } = useContext(FramePanelContext);
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

  const decodeFrameCollection = (ctx, frame, currentFrame, changeIndex) => {
    const img = new Image();
    img.src = frame;
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      addFrame(ctx.getImageData(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE));
      ctx.clearRect(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE);
      changeIndex(currentFrame);
    };
  };

  const encodeFrameCollection = (ctx, frame) => {
    ctx.putImageData(frame, 0, 0);
    return ctx.canvas.toDataURL('image/png');
  };

  const loadDataFromLocalStorage = (userData, canvas) => {
    const ctx = canvas.getContext('2d');

    userData.frameCollection.forEach((frame) =>
      decodeFrameCollection(ctx, frame, userData.currentFrame, changeIndex)
    );

    setPixelSize(userData.pixelSize);
    setFrameRate(userData.frameRate);
    setStrokeSize(userData.strokeSize);
    setToolType(userData.toolType);
    setColorPrimary(userData.colorPrimary);
    setColorSecondary(userData.colorSecondary);
    changeIndex(userData.currentFrame);
  };

  const uploadDataToLocalStorage = (e, canvas) => {
    e.preventDefault();
    const ctx = canvas.getContext('2d');

    const framesEncoded = frameCollection.map((frame) => encodeFrameCollection(ctx, frame));

    const userData = {
      frameCollection: framesEncoded,
      currentFrame,
      pixelSize,
      frameRate,
      strokeSize,
      toolType,
      colorPrimary,
      colorSecondary
    };

    localStorage.setItem('piskel-clone-lhk', JSON.stringify(userData));
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('piskel-clone-lhk'));
    if (userData) loadDataFromLocalStorage(userData, canvasRef.current);
    // eslint-disable-next-line
  }, []);

  useBeforeunload((e) => uploadDataToLocalStorage(e, canvasRef.current));

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
