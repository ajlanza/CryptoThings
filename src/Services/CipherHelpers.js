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
        if(encryptedAsciiChar < 65) {
          encryptedAsciiChar = encryptedAsciiChar - 64 + 90;
        }
        encrypted += String.fromCharCode(encryptedAsciiChar);
        continue;
      }
      if(asciiChar >= 97 && asciiChar <= 122) {
        encryptedAsciiChar = asciiChar + shift;
        if(encryptedAsciiChar > 122) {
          encryptedAsciiChar = encryptedAsciiChar - 122 + 96;
        }
        if(encryptedAsciiChar < 97) {
            encryptedAsciiChar = encryptedAsciiChar - 96 + 122;
          }
        encrypted += String.fromCharCode(encryptedAsciiChar);
        continue;
      }
      else{
        encrypted += toEncrypt.charAt(i);
      }   
    } 
    return encrypted;   
  },

  atbash(toEncrypt) {
    const original = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                      'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const changed = ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a',
                     'Z','Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A'];
    let result = '';
    for(let i = 0; i < toEncrypt.length; i++){
        console.log(original.indexOf(i))
        if(original.indexOf(toEncrypt.charAt(i)) === -1){
          result += toEncrypt.charAt(i);
        }
        else{
          result += changed[original.indexOf(toEncrypt.charAt(i))];
        }
    }
    return result;
  }

  

}

export default CipherHelpers;