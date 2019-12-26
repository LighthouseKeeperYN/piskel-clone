import { TOOL_TYPE } from '../../../shared/constants';

import drawLine from './drawLine';
import { scaleDown } from '../../../shared/utilities';

const applyToolToCanvas = (tool, ctx, pixelSize, currMousePosition, prevMousePosition) => {
  switch (tool) {
    case TOOL_TYPE.pen:
      drawLine(
        ctx,
        pixelSize,
        scaleDown(currMousePosition.x, pixelSize),
        scaleDown(currMousePosition.y, pixelSize),
        scaleDown(prevMousePosition?.x || currMousePosition.x, pixelSize),
        scaleDown(prevMousePosition?.y || currMousePosition.y, pixelSize)
      );
    default:
      break;
  }
};

export default applyToolToCanvas;
