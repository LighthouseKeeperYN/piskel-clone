import React, { useRef, useState } from 'react';

import './canvas.scss';

function Canvas() {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [prevMousePosition, setPrevMousePosition] = useState(null);
  const [pixelSize, setPixelSize] = useState(8);

  const canvasRef = useRef(null);

  function getMousePositionOnCanvas(canvasPosition, event) {
    return {
      x: event.clientX - canvasPosition.left,
      y: event.clientY - canvasPosition.top,
    };
  }


  function scaleDown(coordinate, ratio) {
    return Math.floor(coordinate / ratio);
  }

  function pencil(ctx, currPosition, prevPosition) {
    drawLine(
      ctx,
      scaleDown(prevPosition.x, pixelSize),
      scaleDown(prevPosition.y, pixelSize),
      scaleDown(currPosition.x, pixelSize),
      scaleDown(currPosition.y, pixelSize),
    );
  }

  function handleDrawingOnCanvas(e) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const currMousePosition = getMousePositionOnCanvas(canvas.getBoundingClientRect(), e);

    setPrevMousePosition(currMousePosition);

    pencil(ctx, currMousePosition, prevMousePosition || currMousePosition);
  }


  function drawLine(ctx, x0, y0, x1, y1) {
    const dx = Math.abs(x1 - x0);
    const sx = x0 < x1 ? 1 : -1;

    const dy = Math.abs(y1 - y0);
    const sy = y0 < y1 ? 1 : -1;

    let err = (dx > dy ? dx : -dy) / 2;

    while (true) {
      ctx.fillRect(x0 * pixelSize, y0 * pixelSize, pixelSize, pixelSize);

      if (x0 === x1 && y0 === y1) break;
      const e2 = err;
      if (e2 > -dx) {
        err -= dy;
        x0 += sx;
      }
      if (e2 < dy) {
        err += dx;
        y0 += sy;
      }
    }
  }

  return (
    <canvas
      className="canvas"
      height={512}
      width={512}
      ref={canvasRef}
      onMouseDown={(e) => {
        setIsMouseDown(true);
        handleDrawingOnCanvas(e);
      }}
      onMouseMove={(e) => {
        if (isMouseDown) handleDrawingOnCanvas(e);
      }}
      onMouseUp={() => {
        setIsMouseDown(false);
        setPrevMousePosition(null);
      }}
    ></canvas>
  );
}

export default Canvas;
