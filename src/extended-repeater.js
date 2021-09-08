import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let line;
  let add;
  if(!options.repeatTimes){
    options.repeatTimes = 1;
  }
  if(!options.additionRepeatTimes){
    options.additionRepeatTimes = 1;
  }
  if(!options.separator){
    options.separator = '+'
  }
  if(!options.additionSeparator){
    options.additionSeparator = '|'
  }
  if (
    options.repeatTimes &&
    Number.isInteger(options.repeatTimes) &&
    options.repeatTimes > 1
  ) {
    if (options.separator) {
      line =
        String(str) +
        (String(options.separator) + String(str)).repeat(options.repeatTimes-1);
    } else {
      if (options.repeatTimes > 1) {
        line = String(str).repeat(options.repeatTimes);
      } else {
        line = String(str);
      }
    }
  } else if (options.repeatTimes && Number.isInteger(options.repeatTimes)) {
    line = String(str);
  }
  if (
    options.addition !== undefined &&
    options.additionRepeatTimes &&
    Number.isInteger(options.additionRepeatTimes) &&
    options.additionRepeatTimes > 1
  ) {
    if (options.additionSeparator) {
      add =
        String(options.addition) +
        (String(options.additionSeparator) + String(options.addition)).repeat(
          options.additionRepeatTimes-1
        );
    } else {
      if (options.additionRepeatTimes > 1) {
        add = String(options.addition).repeat(options.additionRepeatTimes);
      } else {
        add = String(options.addition);
      }
    }
  } else if (
    options.addition !== undefined &&
    options.additionRepeatTimes &&
    Number.isInteger(options.additionRepeatTimes)
  ) {
    add = String(options.addition);
  }

  const re = new RegExp(str, "g");
  if (options.addition !== undefined && options.separator) {
    if (options.repeatTimes < 2) return line + add;
    return line.split(options.separator).join(add + options.separator) + add;
  } else if (options.addition !== undefined) {
    if (options.repeatTimes < 2) return line + add;
    return line.match(re).join(add) + add;
  } else {
    return line;
  }

}
