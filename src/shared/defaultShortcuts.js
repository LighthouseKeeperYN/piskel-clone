import { TOOL_TYPES, SHORTCUT_ACTIONS } from './constants';

const DEFAULT_SHORTCUTS = {
  [TOOL_TYPES.pen]: { code: 'KeyP', ctrlKey: false, shiftKey: false, altKey: false },
  [TOOL_TYPES.stroke]: { code: 'KeyL', ctrlKey: false, shiftKey: false, altKey: false },
  [TOOL_TYPES.bucket]: { code: 'KeyB', ctrlKey: false, shiftKey: false, altKey: false },
  [TOOL_TYPES.bucketAll]: { code: 'KeyA', ctrlKey: false, shiftKey: false, altKey: false },
  [TOOL_TYPES.eraser]: { code: 'KeyE', ctrlKey: false, shiftKey: false, altKey: false },
  [TOOL_TYPES.colorPicker]: { code: 'KeyO', ctrlKey: false, shiftKey: false, altKey: false },
  [SHORTCUT_ACTIONS.strokeSizeUp]: {
    code: 'BracketRight',
    ctrlKey: false,
    shiftKey: false,
    altKey: false
  },
  [SHORTCUT_ACTIONS.strokeSizeDown]: {
    code: 'BracketLeft',
    ctrlKey: false,
    shiftKey: false,
    altKey: false
  },
  [SHORTCUT_ACTIONS.previousFrame]: {
    code: 'ArrowUp',
    ctrlKey: false,
    shiftKey: false,
    altKey: false
  },
  [SHORTCUT_ACTIONS.nextFrame]: {
    code: 'ArrowDown',
    ctrlKey: false,
    shiftKey: false,
    altKey: false
  },
  [SHORTCUT_ACTIONS.copyCurrentFrame]: {
    code: 'ArrowDown',
    ctrlKey: false,
    shiftKey: true,
    altKey: true
  },
  [SHORTCUT_ACTIONS.deleteCurrentFrame]: {
    code: 'Delete',
    ctrlKey: false,
    shiftKey: false,
    altKey: false
  },
  [SHORTCUT_ACTIONS.addNewFrame]: {
    code: 'KeyN',
    ctrlKey: false,
    shiftKey: false,
    altKey: false
  },
  [SHORTCUT_ACTIONS.saveAsAPNG]: {
    code: 'KeyP',
    ctrlKey: false,
    shiftKey: true,
    altKey: false
  },
  [SHORTCUT_ACTIONS.saveAsGIF]: { code: 'KeyG', ctrlKey: false, shiftKey: true, altKey: false }
};

export default DEFAULT_SHORTCUTS;
