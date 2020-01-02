import UPNG from 'upng-js';
import GifEncoder from 'gif-encoder';

export function scaleDown(coordinate, ratio) {
  return Math.floor(coordinate / ratio);
}

export function hexToRGB(hex) {
  const m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
  return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
}

export function rgbToHex(rgb) {
  return `#${((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1)}`;
}

export function imageDataCollectionToAPNG({ frameCollection, size, frameRate, colorDepth = 0 }) {
  const header = 'data:image/png;base64,';
  const frames = frameCollection.map((frame) => frame.data.buffer);
  const delays = Array(frameCollection.length).fill(1000 / frameRate);

  const pngArrayBuffer = UPNG.encode(frames, size, size, colorDepth, delays);
  const pngBase64String = btoa(String.fromCharCode(...new Uint8Array(pngArrayBuffer)));

  return header + pngBase64String;
}

export function imageDataCollectionToGIF({ frameCollection, size, frameRate, repeatTimes = 0 }) {
  const header = 'data:image/gif;base64,';
  const gif = new GifEncoder(size, size);

  gif.writeHeader();
  gif.setFrameRate(frameRate);
  gif.setRepeat(repeatTimes);
  gif.setTransparent(0);
  frameCollection.forEach((frame) => gif.addFrame(frame.data));
  gif.finish();

  const gifBase64String = btoa(String.fromCharCode(...gif.read()));

  return header + gifBase64String;
}
