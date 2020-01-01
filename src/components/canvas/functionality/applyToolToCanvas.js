import {
  TOOL_TYPE,
  DEFAULT_CANVAS_SIZE,
  TRANSPARENCY_COLOR,
  BLACK_COLOR_REPLACEMENT,
} from '../../../shared/constants';

import drawLine from './drawLine';
import applyBucket from './applyBucket';
import applyBucketAll from './applyBucketAll';
import applyColorPicker from './applyColorPicker';
import { scaleDown, hexToRGB } from '../../../shared/utilities';

const applyToolToCanvas = ({
  toolType,
  ctx,
  pixelSize,
  strokeSize,
  currMousePosition,
  prevMousePosition,
  colorToApply,
  e,
  setColorPrimary,
  setColorSecondary,
}) => {
  switch (toolType) {
    case TOOL_TYPE.pen:
      drawLine(
        ctx,
        pixelSize,
        scaleDown(currMousePosition.x, pixelSize),
        scaleDown(currMousePosition.y, pixelSize),
        scaleDown(prevMousePosition?.x || currMousePosition.x, pixelSize),
        scaleDown(prevMousePosition?.y || currMousePosition.y, pixelSize),
        strokeSize,
      );
      break;
    case TOOL_TYPE.bucket:
      applyBucket(
        ctx,
        DEFAULT_CANVAS_SIZE,
        colorToApply === TRANSPARENCY_COLOR
          ? hexToRGB(BLACK_COLOR_REPLACEMENT)
          : hexToRGB(colorToApply),
        currMousePosition.x,
        currMousePosition.y,
      );
      break;
    case TOOL_TYPE.bucketAll:
      applyBucketAll(
        ctx,
        DEFAULT_CANVAS_SIZE,
        colorToApply === TRANSPARENCY_COLOR
          ? hexToRGB(BLACK_COLOR_REPLACEMENT)
          : hexToRGB(colorToApply),
        currMousePosition.x,
        currMousePosition.y,
      );
      break;
    case TOOL_TYPE.eraser:
      drawLine(
        ctx,
        pixelSize,
        scaleDown(currMousePosition.x, pixelSize),
        scaleDown(currMousePosition.y, pixelSize),
        scaleDown(prevMousePosition?.x || currMousePosition.x, pixelSize),
        scaleDown(prevMousePosition?.y || currMousePosition.y, pixelSize),
        strokeSize,
        true,
      );
      break;
    case TOOL_TYPE.colorPicker:
      applyColorPicker(
        ctx,
        e,
        currMousePosition.x,
        currMousePosition.y,
        setColorPrimary,
        setColorSecondary,
      );
      break;
    default:
      break;
  }
};

export default applyToolToCanvas;
