import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  let col = 0;
  // "выравниваем" двумерный массив
  matrix
    .reduce ((result, element) => result.concat (element), [])
    // в одномерном считаем совпадения
    .reduce ((acc, item) => {
      if (item == '^^') {
        col++;
      }
    }, {});
  return col;
}
