import React, { useContext } from 'react';
import EventListener from 'react-event-listener';
import { saveAs as saveImage } from 'file-saver';
import _ from 'lodash';

import ShortcutsContext from '../../context/shortcuts/shortcutsContext';
import ToolPanelContext from '../../context/toolPanel/toolPanelContext';
import FramePanelContext from '../../context/framePanel/framePanelContext';
import MenuPanelContext from '../../context/menuPanel/menuPanelContext';

import {
  TOOL_TYPES,
  SHORTCUT_ACTIONS,
  STROKE_SCALES,
  DEFAULT_CANVAS_SIZE,
} from '../../shared/constants';

import { imageDataCollectionToAPNG, imageDataCollectionToGIF } from '../../shared/utilities';

function ShortcutListener() {
  const { shortcuts } = useContext(ShortcutsContext);
  const { strokeSize, setToolType, setStrokeSize } = useContext(ToolPanelContext);
  const { frameRate } = useContext(MenuPanelContext);
  const {
    frameCollection,
    currentFrame,
    changeIndex,
    duplicateFrame,
    deleteFrame,
    addFrame,
  } = useContext(FramePanelContext);

  const getAction = (e) => {
    const keyPressed = {
      code: e.code,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      altKey: e.altKey,
    };

    let action = null;

    Object.entries(shortcuts).forEach(([actionKey, actionObj]) => {
      if (_.isEqual(actionObj, keyPressed)) action = actionKey;
    });

    return action;
  };

  const handleKeyPress = (e) => {
    let img;

    switch (getAction(e)) {
      case TOOL_TYPES.pen:
        setToolType(TOOL_TYPES.pen);
        break;
      case TOOL_TYPES.stroke:
        setToolType(TOOL_TYPES.stroke);
        break;
      case TOOL_TYPES.bucket:
        setToolType(TOOL_TYPES.bucket);
        break;
      case TOOL_TYPES.bucketAll:
        setToolType(TOOL_TYPES.bucketAll);
        break;
      case TOOL_TYPES.eraser:
        setToolType(TOOL_TYPES.eraser);
        break;
      case TOOL_TYPES.colorPicker:
        setToolType(TOOL_TYPES.colorPicker);
        break;
      case SHORTCUT_ACTIONS.strokeSizeDown:
        if (strokeSize > STROKE_SCALES[0]) setStrokeSize(strokeSize - 1);
        break;
      case SHORTCUT_ACTIONS.strokeSizeUp:
        if (strokeSize < STROKE_SCALES[STROKE_SCALES.length - 1]) setStrokeSize(strokeSize + 1);
        break;
      case SHORTCUT_ACTIONS.previousFrame:
        if (currentFrame > 0) changeIndex(currentFrame - 1);
        break;
      case SHORTCUT_ACTIONS.nextFrame:
        if (currentFrame < frameCollection.length - 1) changeIndex(currentFrame + 1);
        break;
      case SHORTCUT_ACTIONS.copyCurrentFrame:
        duplicateFrame(currentFrame);
        break;
      case SHORTCUT_ACTIONS.deleteCurrentFrame:
        if (frameCollection.length > 1) deleteFrame(currentFrame);
        break;
      case SHORTCUT_ACTIONS.addNewFrame:
        addFrame(new ImageData(DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE));
        break;
      case SHORTCUT_ACTIONS.saveAsAPNG:
        img = imageDataCollectionToAPNG({
          frameCollection,
          size: DEFAULT_CANVAS_SIZE,
          frameRate,
        });
        saveImage(img, `${new Date().getTime()}.png`);
        break;
      case SHORTCUT_ACTIONS.saveAsGIF:
        img = imageDataCollectionToGIF({
          frameCollection,
          size: DEFAULT_CANVAS_SIZE,
          frameRate,
        });
        saveImage(img, `${new Date().getTime()}.gif`);
        break;
      default:
        break;
    }
  };

  return <EventListener target="window" onKeyUp={handleKeyPress} />;
}

export default ShortcutListener;
