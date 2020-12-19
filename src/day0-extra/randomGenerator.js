// Random Generator.

/**
 * Generate random Integer
 * @param {Number} max Max. if max is less than 0, it will clip to 0.
 * @param {Number} min Min. if min is less than 0, it will clip to 0.
 * @return {Number} Random Integer.
 */
export function randomInt(max = 0, min = 0) {
  max = max > 0 ? max : 0;
  min = min > 0 ? min : 0;
  return Math.floor(Math.random() * Math.floor(max - min)) + min;
}


/**
 * Generate random hsl color string for CSS value.
 * @params {Number} minH. Min bias for H.
 * @params {Number} minS. Min bias for S.
 * @params {Number} minL. Min bias for L.
 * @return {string} CSS color. hsl(x, x, x).
 */
export function randomHslColor(
  minH = 0,
  maxH = 360,
  minS = 0,
  maxS = 100,
  minL = 0,
  maxL = 100
  ) {
  return `hsl(${randomInt(maxH, minH)}, ${randomInt(maxS, minS)}%, ${randomInt(maxL, minL)}%)`;
}