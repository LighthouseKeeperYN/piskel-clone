function matchStartColor(imgData, pixelPos, startR, startG, startB) {
  const r = imgData.data[pixelPos];
  const g = imgData.data[pixelPos + 1];
  const b = imgData.data[pixelPos + 2];

  return r === startR && g === startG && b === startB;
}

function paintPixel(imgData, pixelPos, color) {
  [
    imgData.data[pixelPos],
    imgData.data[pixelPos + 1],
    imgData.data[pixelPos + 2],
    imgData.data[pixelPos + 3],
  ] = [color[0], color[1], color[2], 255];
}

export default function applyBucket(ctx, canvasFieldSize, color, startX, startY) {
  const imgData = ctx.getImageData(0, 0, canvasFieldSize, canvasFieldSize);
  const startColor = ctx.getImageData(startX, startY, 1, 1).data;
  const startR = startColor[0];
  const startG = startColor[1];
  const startB = startColor[2];
  const pixelStack = [[startX, startY]];

  if (startColor[0] === color[0] && startColor[1] === color[1] && startColor[2] === color[2]) {
    return;
  }

  while (pixelStack.length) {
    const newPos = pixelStack.pop();
    const x = newPos[0];
    let y = newPos[1];
    let leftMarked = false;
    let rightMarked = false;
    let pixelPos = (y * canvasFieldSize + x) * 4;

    for (; y >= 0 && matchStartColor(imgData, pixelPos, startR, startG, startB); y--) {
      pixelPos -= canvasFieldSize * 4;
    }

    pixelPos += canvasFieldSize * 4;
    y += 1;

    for (;y <= canvasFieldSize && matchStartColor(imgData, pixelPos, startR, startG, startB); y++) {
      paintPixel(imgData, pixelPos, color);

      if (x > 0) {
        if (matchStartColor(imgData, pixelPos - 4, startR, startG, startB)) {
          if (!leftMarked) {
            pixelStack.push([x - 1, y]);
            leftMarked = true;
          }
        } else if (leftMarked) {
          leftMarked = false;
        }
      }

      if (x <= canvasFieldSize) {
        if (matchStartColor(imgData, pixelPos + 4, startR, startG, startB)) {
          if (!rightMarked) {
            pixelStack.push([x + 1, y]);
            rightMarked = true;
          }
        } else if (rightMarked) {
          rightMarked = false;
        }
      }

      pixelPos += canvasFieldSize * 4;
    }
  }

  ctx.putImageData(imgData, 0, 0);
}
