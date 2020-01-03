export const DEFAULT_PIXEL_SIZE = 16;
export const DEFAULT_CANVAS_SIZE = 512;
export const DEFAULT_FRAME_RATE = 1;
export const MIN_FRAME_RATE = 1;
export const MAX_FRAME_RATE = 24;
export const TRANSPARENCY_COLOR = '#000000';
export const BLACK_COLOR_REPLACEMENT = '#000001';
export const LOCAL_STORAGE_KEY = 'piskel-clone-lhk';
export const STROKE_SCALES = [1, 2, 3, 4];
export const TOOL_TYPES = {
  pen: 'pen',
  stroke: 'stroke',
  bucket: 'bucket',
  bucketAll: 'bucket-all',
  eraser: 'eraser',
  colorPicker: 'color-picker'
};
export const TOOL_NAMES = {
  [TOOL_TYPES.pen]: 'Pen tool',
  [TOOL_TYPES.stroke]: 'Stroke tool',
  [TOOL_TYPES.bucket]: 'Paint bucket tool',
  [TOOL_TYPES.bucketAll]: 'Pain all pixels of the same color',
  [TOOL_TYPES.eraser]: 'Eraser Tool',
  [TOOL_TYPES.colorPicker]: 'Color picker'
};
export const DEFAULT_COLORS = {
  primary: '#ffffff',
  secondary: '#000000'
};
export const PIXEL_SIZES = {
  16: 16,
  8: 8,
  4: 4
};
export const TOOLTIP_PROPS = {
  delay: 0,
  arrowSize: 5,
  padding: '0.5rem',
  directions: {
    left: 'left',
    up: 'up',
    right: 'right',
    down: 'down'
  }
};
export const SHORTCUT_ACTIONS = {
  strokeSizeUp: 'strokeSizeUp',
  strokeSizeDown: 'strokeSizeDown',
  previousFrame: 'previousFrame',
  nextFrame: 'nextFrame',
  copyCurrentFrame: 'copyCurrentFrame',
  deleteCurrentFrame: 'deleteCurrentFrame',
  addNewFrame: 'addNewFrame',
  saveAsAPNG: 'saveAsAPNG',
  saveAsGIF: 'saveAsGIF'
};
