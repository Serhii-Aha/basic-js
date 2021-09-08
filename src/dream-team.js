import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray (members)) {
    return false;
  }
  let tempArr = [];
  let tempElem;
  for (let i = 0; i < members.length; i++) {
    // если строка, то обрабатываем
    if (typeof members[i] == 'string') {
      // пробелы, верхний регистр, оставляем первый элемент
      tempElem = members[i].trim ().toUpperCase ().substring (0, 1);
      // добавляем в новый массив
      tempArr.push (tempElem);
    }
  }
  // let s = tempArr.sort().join('');
  // сортируем и переводим в строку
  return tempArr.sort ().join ('');
}
