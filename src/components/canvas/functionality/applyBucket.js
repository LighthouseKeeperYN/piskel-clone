function matchStartColor(imgData, pixelPos, startR, startG, startB, startA) {
  const r = imgData.data[pixelPos];
  const g = imgData.data[pixelPos + 1];
  const b = imgData.data[pixelPos + 2];
  const a = imgData.data[pixelPos + 3];

  return r === startR && g === startG && b === startB && a === startA;
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
  const [startR, startG, startB, startA] = ctx.getImageData(startX, startY, 1, 1).data;
  const pixelStack = [[startX, startY]];

  if (startR === color[0] && startG === color[1] && startB === color[2] && startA === 255) {
    return;
  }

  while (pixelStack.length) {
    const newPos = pixelStack.pop();
    const x = newPos[0];
    let y = newPos[1];
    let leftMarked = false;
    let rightMarked = false;
    let pixelPos = (y * canvasFieldSize + x) * 4;

    for (; y >= 0 && matchStartColor(imgData, pixelPos, startR, startG, startB, startA); y--) {
      pixelPos -= canvasFieldSize * 4;
    }

    pixelPos += canvasFieldSize * 4;
    y += 1;

    for (
      ;
      y <= canvasFieldSize && matchStartColor(imgData, pixelPos, startR, startG, startB, startA);
      y++
    ) {
      paintPixel(imgData, pixelPos, color);

      if (x > 0) {
        if (matchStartColor(imgData, pixelPos - 4, startR, startG, startB, startA)) {
          if (!leftMarked) {
            pixelStack.push([x - 1, y]);
            leftMarked = true;
          }
        } else if (leftMarked) {
          leftMarked = false;
        }
      }

      if (x <= canvasFieldSize) {
        if (matchStartColor(imgData, pixelPos + 4, startR, startG, startB, startA)) {
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
