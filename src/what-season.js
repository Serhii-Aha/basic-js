import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (arguments.length == 0) {
    return 'Unable to determine the time of year!';
  }
  let toString = {}.toString;
  if (toString.call(date) != '[object Date]') {
    throw new Error ('Invalid date!');
  }
  if (toString.call(date).slice(8, -1) != 'Date') {
    throw new Error ('Invalid date!');
  }

  if (Array.isArray(date)) {
    throw new Error ('Invalid date!');
  }
  if (!date.toJSON() || typeof(date) != 'object' || !date instanceof Date) {
    throw new Error ('Invalid date!');
    // throw new Error();
  }
  if (!date.getMonth || date.getTime) {
    throw new Error ('Invalid date!');
  }
  if (!date.length == 7 || !date.getTime) {
    throw new Error ('Invalid date!');
  }
  let month = date.getMonth();
  if (month > 11 || month < 0) {
    throw new Error ('Invalid date!');
  }
  switch (true) {
    case month >= 2 && month <= 4: {
      return 'spring';
      break;
    }

    case month >= 5 && month <= 7: {
      return 'summer';
      break;
    }

    case month >= 8 && month <= 10: {
      return 'autumn';
      break;
    }

    default:
      return 'winter';
  }
}