import 'jest-canvas-mock';
import applyToolToCanvas from '../applyToolToCanvas';

import { TOOL_TYPES } from '../../../../shared/constants';

const canvas = document.createElement('canvas');

const params = {
  e: { buttons: 1 },
  ctx: canvas.getContext('2d'),
  pixelSize: 16,
  currMousePosition: { x: 1, y: 2 },
  prevMousePosition: { x: 3, y: 4 },
  strokeSize: 2,
  setColorPrimary: () => true,
  setColorSecondary: () => true,
  isDrawing: true,
  isErasing: true,
  toolType: TOOL_TYPES.pen,
  colorToApply: '#ffffff',
};

test("applyToolToCanvas doesn't throw when tool not specified", () => {
  expect(() => applyToolToCanvas({ ...params, toolType: undefined })).not.toThrow();
});

test('applyToolToCanvas applies all types of tools except stroke correctly', () => {
  expect(() => Object.values(TOOL_TYPES).forEach((toolType) => {
    if (toolType !== TOOL_TYPES.stroke) applyToolToCanvas({ ...params, toolType });
  })).not.toThrow();
});

params.isDrawing = false;

test('applyToolToCanvas applies stroke correctly', () => {
  expect(() => applyToolToCanvas({ ...params, toolType: TOOL_TYPES.stroke })).not.toThrow();
});
