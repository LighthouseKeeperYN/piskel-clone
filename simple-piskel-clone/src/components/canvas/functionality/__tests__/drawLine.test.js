import 'jest-canvas-mock';
import drawLine from '../drawLine';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const pixelSize = 16;
const currMousePosition = { x: 1, y: 2 };
const prevMousePosition = { x: 3, y: 4 };
const strokeSize = 2;
let isErasing = true;

test('drawLine throws when current mouse position not specified', () => {
  expect(() => drawLine({ ctx, pixelSize, prevMousePosition, strokeSize })).toThrow();
});

test("drawLine doesn't throws when previous mouse position not specified", () => {
  expect(() => drawLine({ ctx, pixelSize, currMousePosition, strokeSize })).not.toThrow();
});

test('drawLine draws correctly', () => {
  expect(() =>
    drawLine({ ctx, pixelSize, currMousePosition, prevMousePosition, strokeSize })
  ).not.toThrow();
});

test('drawLine erases correctly', () => {
  expect(() =>
    drawLine({ ctx, pixelSize, currMousePosition, prevMousePosition, strokeSize }, isErasing)
  ).not.toThrow();
});
