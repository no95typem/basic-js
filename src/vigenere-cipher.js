const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    if(direct==false) this.direct = false;
    else this.direct = true;
  }
  encrypt(message, key) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = '';
    for(let i = 0; i < message.length; i++) {
      for(let j=0; j<key.length; j++) {
        if(i>=message.length) break;
        if(message.charCodeAt(i)<65 || message.charCodeAt(i)>90) {
          encryptedMessage+=message[i];
          i++;
          j--;
          continue;
        }
        let encryptedCharCode = message.charCodeAt(i) + key.charCodeAt(j) - 65;
        if(encryptedCharCode > 90) encryptedCharCode-=26;
        encryptedMessage+=String.fromCharCode(encryptedCharCode);
        if(j<key.length-1) i++;
      }
    }
    if(this.direct) {
      console.log(this.direct);
      return encryptedMessage;
    }
    else {
      console.log("reversed");
      return encryptedMessage.split('').reverse().join('');
    }
  }  
  
  decrypt(encMessage, key) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    encMessage = encMessage.toUpperCase();
    key = key.toUpperCase();
    let decryptedMessage = '';
    for(let i = 0; i < encMessage.length; i++) {
      for(let j=0; j<key.length; j++) {
        if(i>=encMessage.length) break;
        if(encMessage.charCodeAt(i)<65 || encMessage.charCodeAt(i)>90) {
          decryptedMessage+=encMessage[i];
          i++;
          j--;
          continue;
        }
        let decryptedCharCode = encMessage.charCodeAt(i) - key.charCodeAt(j) + 65;
        if(decryptedCharCode < 65) decryptedCharCode+=26;
        decryptedMessage+=String.fromCharCode(decryptedCharCode);
        if(j<key.length-1) i++;
      }
    }
    if(this.direct) return decryptedMessage;
    else return decryptedMessage.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
