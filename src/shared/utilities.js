export function getMousePositionOnCanvas(canvasPosition, event) {
  return {
    x: event.clientX - canvasPosition.left,
    y: event.clientY - canvasPosition.top,
  };
}

export function scaleDown(coordinate, ratio) {
  return Math.floor(coordinate / ratio);
}

export function hexToRGB(hex) {
  const m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
  return [
    parseInt(m[1], 16),
    parseInt(m[2], 16),
    parseInt(m[3], 16),
  ];
}
