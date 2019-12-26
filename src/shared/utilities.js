export function getMousePositionOnCanvas(canvasPosition, event) {
  return {
    x: event.clientX - canvasPosition.left,
    y: event.clientY - canvasPosition.top,
  };
}

export function scaleDown(coordinate, ratio) {
  return Math.floor(coordinate / ratio);
}
