import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  let N0 = parseFloat (sampleActivity);
  if (typeof sampleActivity !== 'string' || isNaN (N0) || 15 <= N0 || N0 <= 0) {
    return false;
  }
  let k = Math.log (2) / HALF_LIFE_PERIOD;
  let t = Math.log (MODERN_ACTIVITY / N0) / k;
  return Math.ceil (t);
}
