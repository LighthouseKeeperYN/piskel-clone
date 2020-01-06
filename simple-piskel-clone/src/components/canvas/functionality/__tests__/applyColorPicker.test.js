import 'jest-canvas-mock';
import applyColorPicker from '../applyColorPicker';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

const setColorPrimary = () => true;
const setColorSecondary = () => true;
let e = { buttons: 1 };
const currMousePosition = { x: 1, y: 2 };

test('applyColorPicker throws when mouse one of the arguments not specified', () => {
  expect(() => applyColorPicker({ ctx, e, setColorSecondary, currMousePosition })).toThrow();
  e.buttons = 2;
  expect(() => applyColorPicker({ ctx, e, setColorPrimary, currMousePosition })).toThrow();
  e.buttons = 1;
  expect(() => applyColorPicker({ ctx, e, setColorPrimary, setColorSecondary })).toThrow();
  expect(() =>
    applyColorPicker({ ctx, setColorPrimary, setColorSecondary, currMousePosition })
  ).toThrow();
  expect(() =>
    applyColorPicker({ e, setColorPrimary, setColorSecondary, currMousePosition })
  ).toThrow();
});

test('applyColorPicker works correctly', () => {
  expect(() =>
    applyColorPicker({
      ctx,
      currMousePosition,
      e,
      setColorPrimary,
      setColorSecondary
    })
  ).not.toThrow();
});
