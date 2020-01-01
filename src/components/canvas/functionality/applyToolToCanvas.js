import { TOOL_TYPE } from '../../../shared/constants';

import drawLine from './drawLine';
import applyBucket from './applyBucket';
import applyBucketAll from './applyBucketAll';
import applyColorPicker from './applyColorPicker';

const applyToolToCanvas = (params) => {
  switch (params.toolType) {
    case TOOL_TYPE.pen:
      drawLine(params);
      break;
    case TOOL_TYPE.bucket:
      applyBucket(params);
      break;
    case TOOL_TYPE.bucketAll:
      applyBucketAll(params);
      break;
    case TOOL_TYPE.eraser:
      drawLine(params, true);
      break;
    case TOOL_TYPE.colorPicker:
      applyColorPicker(params);
      break;
    default:
      break;
  }
};

export default applyToolToCanvas;
