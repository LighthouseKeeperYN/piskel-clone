export default function drawLine(ctx, pixelSize, x0, y0, x1, y1, isErasing) {
  const dx = Math.abs(x1 - x0);
  const sx = x0 < x1 ? 1 : -1;

  const dy = Math.abs(y1 - y0);
  const sy = y0 < y1 ? 1 : -1;

  let err = (dx > dy ? dx : -dy) / 2;
  let x0copy = x0;
  let y0copy = y0;

  for (;;) {
    if (isErasing) {
      ctx.clearRect(x0copy * pixelSize, y0copy * pixelSize, pixelSize, pixelSize);
    } else {
      ctx.fillRect(x0copy * pixelSize, y0copy * pixelSize, pixelSize, pixelSize);
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