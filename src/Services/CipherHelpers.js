const CipherHelpers = {

  ceaser(toEncrypt, shift) {
    let encrypted = '';
    let encryptedAsciiChar = '';
    for(let i = 0; i < toEncrypt.length; i++){
      let asciiChar = toEncrypt.charCodeAt(i);
      if(asciiChar >= 65 && asciiChar <= 90) {
        encryptedAsciiChar = asciiChar + shift;
        if(encryptedAsciiChar > 90) {
          encryptedAsciiChar = encryptedAsciiChar - 90 + 64;
        }
        encrypted += String.fromCharCode(encryptedAsciiChar);
        continue;
      }
      if(asciiChar >= 97 && asciiChar <= 122) {
        encryptedAsciiChar = asciiChar + shift;
        if(encryptedAsciiChar > 122) {
          encryptedAsciiChar = encryptedAsciiChar - 122 + 96;
        }
        encrypted += String.fromCharCode(encryptedAsciiChar);
        continue;
      }
      else{
        encrypted += toEncrypt.charAt(i);
      }   
    } 
    return encrypted;   
  }
  
}

export default CipherHelpers;