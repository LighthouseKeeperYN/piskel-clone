import { scaleDown } from '../../../shared/utilities';

export default function drawLine(
  { ctx, pixelSize, currMousePosition, prevMousePosition, strokeSize },
  isErasing,
) {
  const x0 = scaleDown(currMousePosition.x + 1, pixelSize);
  const y0 = scaleDown(currMousePosition.y + 1, pixelSize);
  const x1 = scaleDown(prevMousePosition?.x + 1 || currMousePosition.x + 1, pixelSize);
  const y1 = scaleDown(prevMousePosition?.y + 1 || currMousePosition.y + 1, pixelSize);

  const dx = Math.abs(x1 - x0);
  const sx = x0 < x1 ? 1 : -1;

  const dy = Math.abs(y1 - y0);
  const sy = y0 < y1 ? 1 : -1;

  let err = (dx > dy ? dx : -dy) / 2;
  let x0copy = x0;
  let y0copy = y0;

  for (;;) {
    if (isErasing) {
      ctx.clearRect(
        x0copy * pixelSize,
        y0copy * pixelSize,
        pixelSize * strokeSize,
        pixelSize * strokeSize,
      );
    } else {
      ctx.fillRect(
        x0copy * pixelSize,
        y0copy * pixelSize,
        pixelSize * strokeSize,
        pixelSize * strokeSize,
      );
    }

    if (x0copy === x1 && y0copy === y1) break;

    const e2 = err;

    if (e2 > -dx) {
      err -= dy;
      x0copy += sx;
    }

    if (e2 < dy) {
      err += dx;
      y0copy += sy;
    }
  }
}
