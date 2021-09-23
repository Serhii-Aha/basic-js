import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// export default function deleteDigit(/* n */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

export default function deleteDigit(n) {
  let s = n.toString();
  let a = [];
  a = s.split('');
  let min_Index = a.reduce((iMin, x, i, a) => x > a[iMin] ? iMin : i, 9);
  // let min_Index = a.indexOf(Math.min(...a));
  a.splice(min_Index, 1);
  s = a.join('');
  // return Number(s);
  return parseInt(s);

}