export function reverseString(word) {
  let temp = word.split('')
  let tempTwo = ''
  for (let i = temp.length - 1; i >= 0; i--) {
    tempTwo += temp[i]
  }
  return tempTwo
}