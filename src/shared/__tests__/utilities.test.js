import {
  scaleDown,
  hexToRGB,
  rgbToHex,
  shortcutToString,
  imageDataCollectionToAPNG,
  imageDataCollectionToGIF
} from '../utilities';

test('scaleDown: Transforms mouse coordinates', () => {
  expect(scaleDown(10, 16)).toBe(0);
  expect(scaleDown(110, 16)).toBe(6);
  expect(scaleDown(16, 16)).toBe(1);
  expect(scaleDown(111, 64)).toBe(1);
});

test('hexToRGB: Coverts hex string to rgb array', () => {
  expect(hexToRGB('#010203')).toEqual([1, 2, 3]);
  expect(hexToRGB('#2c6f15')).toEqual([44, 111, 21]);
  expect(hexToRGB('#F47DD4')).toEqual([244, 125, 212]);
  expect(hexToRGB('#000000')).toEqual([0, 0, 0]);
});

test('rgbToHe: Coverts RGB array to hex string', () => {
  expect(rgbToHex([151, 34, 34])).toBe('#972222');
  expect(rgbToHex([111, 222, 123])).toBe('#6fde7b');
  expect(rgbToHex([23, 142, 222])).toBe('#178ede');
  expect(rgbToHex([255, 255, 255])).toBe('#ffffff');
});

test('shortcutToString: Coverts shortcut object into string', () => {
  const shortcut1 = { code: 'KeyP', ctrlKey: true, shiftKey: false, altKey: true };
  expect(shortcutToString(shortcut1)).toBe('( Ctrl + Alt + P )');
  const shortcut2 = { code: 'Digit1', ctrlKey: true, shiftKey: false, altKey: false };
  expect(shortcutToString(shortcut2)).toBe('( Ctrl + 1 )');
  const shortcut3 = { code: 'ArrowDown', ctrlKey: false, shiftKey: true, altKey: false };
  expect(shortcutToString(shortcut3)).toBe('( Shift + ArrowDown )');

  const keyCodes = ['BracketLeft', 'BracketRight','Equal','Slash','Minus','Comma','Period',
  'Semicolon','Quote','Backslash','Backquote'];
  const symbols = ['[',']','=','/','-',',','.',';','\'','\\','`'];
  keyCodes.forEach((code, index) => {
    expect(shortcutToString({code, ctrlKey: false, shiftKey: false, altKey: false}))
      .toBe(`( ${symbols[index]} )`);
  })
});

test('imageDataCollectionToAPNG: Converts imageDataArray to base64 APNG string', () => {
  const imgData = { width: 512, height: 512, data: new Uint8ClampedArray(8000) };
  const frameCollection = [imgData, imgData];
  const size = 512;
  const frameRate = 24;
  expect(imageDataCollectionToAPNG({ frameCollection, size, frameRate })).toMatch(
    /data:image\/png;base64,/
  );
});

test('imageDataCollectionToGIF: Converts imageDataArray to base64 GIF string', () => {
  const imgData = { width: 512, height: 512, data: new Uint8ClampedArray(8000) };
  const frameCollection = [imgData, imgData];
  const size = 512;
  const frameRate = 24;
  expect(imageDataCollectionToGIF({ frameCollection, size, frameRate })).toMatch(
    /data:image\/gif;base64,/
  );
});
