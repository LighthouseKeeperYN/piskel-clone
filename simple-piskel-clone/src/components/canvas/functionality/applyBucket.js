import { hexToRGB } from '../../../shared/utilities';
import {
  TRANSPARENCY_COLOR,
  BLACK_COLOR_REPLACEMENT,
  DEFAULT_CANVAS_SIZE,
} from '../../../shared/constants';

function matchStartColor(imgData, pixelPos, startColor) {
  const r = imgData.data[pixelPos];
  const g = imgData.data[pixelPos + 1];
  const b = imgData.data[pixelPos + 2];
  const a = imgData.data[pixelPos + 3];

  return r === startColor.r && g === startColor.g && b === startColor.b && a === startColor.a;
}

function paintPixel(imgData, pixelPos, color) {
  [
    imgData.data[pixelPos],
    imgData.data[pixelPos + 1],
    imgData.data[pixelPos + 2],
    imgData.data[pixelPos + 3],
  ] = [color[0], color[1], color[2], 255];
}

export default function applyBucket({ ctx, colorToApply, currMousePosition }) {
  const color = colorToApply === TRANSPARENCY_COLOR
    ? hexToRGB(BLACK_COLOR_REPLACEMENT)
    : hexToRGB(colorToApply);

  const startX = currMousePosition.x;
  const startY = currMousePosition.y;

  const imgData = ctx.getImageData(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE);

  const startColor = {};
  [startColor.r, startColor.g, startColor.b, startColor.a] = ctx.getImageData(
    startX,
    startY,
    1,
    1,
  ).data;

  const pixelStack = [[startX, startY]];

  if (
    startColor.r === color[0]
    && startColor.g === color[1]
    && startColor.b === color[2]
    && startColor.a === 255
  ) {
    return;
  }

  while (pixelStack.length) {
    const newPos = pixelStack.pop();
    const x = newPos[0];
    let y = newPos[1];
    let leftMarked = false;
    let rightMarked = false;
    let pixelPos = (y * DEFAULT_CANVAS_SIZE + x) * 4;

    for (; y >= 0 && matchStartColor(imgData, pixelPos, startColor); y--) {
      pixelPos -= DEFAULT_CANVAS_SIZE * 4;
    }

    pixelPos += DEFAULT_CANVAS_SIZE * 4;
    y += 1;

    for (; y <= DEFAULT_CANVAS_SIZE && matchStartColor(imgData, pixelPos, startColor); y++) {
      paintPixel(imgData, pixelPos, color);

      if (x > 0) {
        if (matchStartColor(imgData, pixelPos - 4, startColor)) {
          if (!leftMarked) {
            pixelStack.push([x - 1, y]);
            leftMarked = true;
          }
        } else if (leftMarked) {
          leftMarked = false;
        }
      }

      if (x <= DEFAULT_CANVAS_SIZE) {
        if (matchStartColor(imgData, pixelPos + 4, startColor)) {
          if (!rightMarked) {
            pixelStack.push([x + 1, y]);
            rightMarked = true;
          }
        } else if (rightMarked) {
          rightMarked = false;
        }
      }

      pixelPos += DEFAULT_CANVAS_SIZE * 4;
    }
  }

  ctx.putImageData(imgData, 0, 0);
}
