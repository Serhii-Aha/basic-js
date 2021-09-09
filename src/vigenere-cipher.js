import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor (mode){
    this.mode = String(mode);
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  }
  getStringFromKey(str,key){
    let strToUpp = str.toUpperCase()
    let keyLength = key.length;
    let keyToStr = ''
    let k = 0;
    for (let i = 0; ; i++) {
      if (k === keyLength) {
        k = 0;
      }
  
      if (keyToStr.length === strToUpp.length) {
        break
      }
      if(!this.alphabet.includes(strToUpp[i])){
        keyToStr += strToUpp.charAt(i)
      } else {
      keyToStr += key.charAt(k);
      k++
      }
    }
    return keyToStr.toUpperCase();
  }
  encrypt(str, key) {
    let strToUpp = str.toUpperCase()
    let keyToStr = this.getStringFromKey(str, key)
    //
    let cipherText = ""
    for (let j = 0; j < str.length; j++){
      if(this.alphabet.includes(strToUpp[j])){
        let x = ((strToUpp.charCodeAt(j) - 65) + (keyToStr.charCodeAt(j) - 65)) % 26;
        cipherText += String.fromCharCode(x + 65)
      } else {
        cipherText += strToUpp[j];
      }
    }

    keyToStr = '';
    if(this.mode === 'false') {
      return cipherText = cipherText.split('').reverse().join('')
    } 
    return cipherText 
  }
  decrypt(str, key) {
    let strToUpp = str.toUpperCase()
    let keyToStr = this.getStringFromKey(str, key)
    
    let originalText = '';
    for (let j = 0; j < str.length; j++) {
      if(this.alphabet.includes(str[j])){
        let x = ((strToUpp.charCodeAt(j) - 65) - (keyToStr.charCodeAt(j) - 65) + 26) % 26;
        originalText += String.fromCharCode(x + 65)
      } else {
        originalText += str[j];
      }
    }
    keyToStr = '';
    if(this.mode === 'false') {
      return originalText = originalText.split('').reverse().join('')
    } 
    return originalText;
  }
}