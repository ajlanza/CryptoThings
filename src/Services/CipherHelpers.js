const CipherHelpers = {

  ceaser(toEncrypt, shift) {
    let encrypted = '';
    let encryptedAsciiChar = '';
    if(shift === null || shift === undefined || isNaN(shift)) {
        shift = 0;
      }
      if(shift > 26 || shift < -26){
        shift = shift % 26;
      }
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
        if(original.indexOf(toEncrypt.charAt(i)) === -1){
          result += toEncrypt.charAt(i);
        }
        else{
          result += changed[original.indexOf(toEncrypt.charAt(i))];
        }
    }
    return result;
  }, 
  
  rot13(toEncrypt) {
    return (this.ceaser(toEncrypt, 13));
  },

  railFence(toEncrypt, key) {
    // Need at least 2 rows for the cipher to work
    if(!key || key < 2){
      key = 2;
    }
    let result = '';
    let reverse = false;
    let row = 0;
    let rows = [];
    // Set up the number of rows to traverse over
    for(let i = 0; i < key; i++){
        rows[i] = [];
    }
    // Go through the string one character at a time
    for(let letterPosition = 0; letterPosition < toEncrypt.length; letterPosition++){
      rows[row] += toEncrypt[letterPosition];
      // If we are on the last row, travel backwards through the rows
      if(row === key - 1){
        reverse = true;
      }
      // If we are on the first row, we want to travel forward through the rows
      if(row === 0){
        reverse = false;
      }
      if(reverse){
        row--;
      }
      else {
        row++;
      }
    }
    // Join all our rows together and return the string
    rows.forEach(row =>
      result += row
    )
    return result;
  }

}

export default CipherHelpers;