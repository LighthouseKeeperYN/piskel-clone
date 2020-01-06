import { hexToRGB } from '../../../shared/utilities';
import {
  TRANSPARENCY_COLOR,
  BLACK_COLOR_REPLACEMENT,
  DEFAULT_CANVAS_SIZE,
} from '../../../shared/constants';

function matchStartColor(imgData, pixelPos, replacedColor) {
  const r = imgData.data[pixelPos];
  const g = imgData.data[pixelPos + 1];
  const b = imgData.data[pixelPos + 2];
  const a = imgData.data[pixelPos + 3];

  return (
    r === replacedColor.r && g === replacedColor.g && b === replacedColor.b && a === replacedColor.a
  );
}

function paintPixel(imgData, pixelPos, color) {
  [
    imgData.data[pixelPos],
    imgData.data[pixelPos + 1],
    imgData.data[pixelPos + 2],
    imgData.data[pixelPos + 3],
  ] = [color[0], color[1], color[2], 255];
}

export default function applyBucketAll({ ctx, colorToApply, currMousePosition }) {
  const color = colorToApply === TRANSPARENCY_COLOR
    ? hexToRGB(BLACK_COLOR_REPLACEMENT)
    : hexToRGB(colorToApply);

  const imgData = ctx.getImageData(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE);
  const replacedColor = {};
  [replacedColor.r, replacedColor.g, replacedColor.b, replacedColor.a] = ctx.getImageData(
    currMousePosition.x,
    currMousePosition.y,
    1,
    1,
  ).data;

  for (let pixelPos = 0; pixelPos < imgData.data.length; pixelPos += 4) {
    if (matchStartColor(imgData, pixelPos, replacedColor)) paintPixel(imgData, pixelPos, color);
  }

  ctx.putImageData(imgData, 0, 0);
}
