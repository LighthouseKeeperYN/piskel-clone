import { rgbToHex } from '../../../shared/utilities';

export default function applyColorPicker(ctx, e, x, y, setColorPrimary, setColorSecondary) {
  const pxData = ctx.getImageData(x, y, 1, 1).data.slice(0, -1);

  if (e.buttons === 1) setColorPrimary(rgbToHex(pxData));
  else setColorSecondary(rgbToHex(pxData));
}
