import { TOOL_TYPES, DEFAULT_CANVAS_SIZE } from '../../../shared/constants';

import drawLine from './drawLine';
import applyBucket from './applyBucket';
import applyBucketAll from './applyBucketAll';
import applyColorPicker from './applyColorPicker';

let initialImage;
let initialPrevMousePosition;

const applyToolToCanvas = (params) => {
  switch (params.toolType) {
    case TOOL_TYPES.pen:
      drawLine(params);
      break;
    case TOOL_TYPES.bucket:
      applyBucket(params);
      break;
    case TOOL_TYPES.bucketAll:
      applyBucketAll(params);
      break;
    case TOOL_TYPES.eraser:
      drawLine(params, true);
      break;
    case TOOL_TYPES.colorPicker:
      applyColorPicker(params);
      break;
    case TOOL_TYPES.stroke:
      if (!params.isDrawing) {
        initialImage = params.ctx.getImageData(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE);
        initialPrevMousePosition = params.currMousePosition;
      } else {params.ctx.putImageData(initialImage, 0, 0);}

      drawLine({ ...params, prevMousePosition: initialPrevMousePosition });
      break;
    default:
      break;
  }
};

export default applyToolToCanvas;
