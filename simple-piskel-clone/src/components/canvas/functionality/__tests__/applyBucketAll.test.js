import 'jest-canvas-mock';
import applyBucketAll from '../applyBucketAll';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

test('applyBucketAll throws when mouse one of the arguments not specified', () => {
  expect(() => applyBucketAll({ ctx, colorToApply: '#123456' })).toThrow();
  expect(() => applyBucketAll({ ctx, currMousePosition: { x: 1, y: 2 } })).toThrow();
  expect(() =>
    applyBucketAll({ colorToApply: '#123456', currMousePosition: { x: 1, y: 2 } })
  ).toThrow();
});

test('applyBucketAll works correctly', () => {
  expect(() =>
    applyBucketAll({ ctx, colorToApply: '#123456', currMousePosition: { x: 1, y: 2 } })
  ).not.toThrow();
});
