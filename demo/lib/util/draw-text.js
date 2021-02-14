import { drawBorder } from './draw-line.js';
import { createTextCanvas } from './text.js';
import { createBlockCanvas } from './block.js';

/**
 * @param {string} text 
 * @param {object} opts 
 */
export function drawText(ctx2d, text, opts = {  }) {
  const result = { width: 0, height: 0, }
  const _opts = { ...{
    x: 0,
    y: 0,
    fontSize: 12,
    fontFamily: 'Microsoft YaHei',
    color: '#000000',
  }, ...opts};
  const {
    x, y, fontSize, color, fontFamily, maxWidth, lineHeight, wordBreak, ellipsisLine,
    borderWidth, borderColor, borderRadius, backgroundColor, paddingLeft, paddingRight, paddingTop, paddingBottom,
  } = _opts;

  const textCanvas = createTextCanvas(text, {
    fontSize, color, fontFamily, maxWidth, lineHeight, wordBreak, ellipsisLine,
    paddingLeft, paddingRight, paddingTop, paddingBottom,
  });
  const { width, height } = textCanvas;
  const blockCanvas = createBlockCanvas({ width, height, backgroundColor, borderColor, borderRadius, })
  ctx2d.drawImage(blockCanvas, x, y, width, height);
  ctx2d.drawImage(textCanvas, x, y, width, height);
  drawBorder(ctx2d, { x, y, width, height, borderRadius, borderColor, borderWidth })
  return { width, height };
}

