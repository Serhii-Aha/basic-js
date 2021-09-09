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
export default function getSeason(dat) {
  if (arguments.length == 0) {
    return 'Unable to determine the time of year!';
  }
  if (!date.toJSON()) {
    throw new Error();
  }
  let month = date.getMonth();
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