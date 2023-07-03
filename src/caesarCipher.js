export function ceasarCipher(string, shift) {
  let result = ''
  let charCode = 0
  
  for (let i = 0; i < string.length; i++) {
    charCode = string[i].charCodeAt()
    
    if (charCode >= 65 && charCode <= 90) {
      charCode = (charCode + shift - 65) % 26 + 65
      result += String.fromCharCode(charCode)
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = (charCode + shift - 97) % 26 + 97
      result += String.fromCharCode(charCode)
    } else {
      result += String.fromCharCode(charCode)
    }
  }
  return result
}