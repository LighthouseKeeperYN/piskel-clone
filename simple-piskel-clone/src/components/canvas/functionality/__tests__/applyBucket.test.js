import 'jest-canvas-mock';
import applyBucket from '../applyBucket';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

test('applyBucket throws when mouse one of the arguments not specified', () => {
  expect(() => applyBucket({ ctx, colorToApply: '#123456' })).toThrow();
  expect(() => applyBucket({ ctx, currMousePosition: { x: 1, y: 2 } })).toThrow();
  expect(() =>
    applyBucket({ colorToApply: '#123456', currMousePosition: { x: 1, y: 2 } })
  ).toThrow();
});

test('applyBucket works correctly', () => {
  expect(() =>
    applyBucket({ ctx, colorToApply: '#123456', currMousePosition: { x: 1, y: 2 } })
  ).not.toThrow();
});
