export function analyzeArray(array) {
  if (array.length === 1) {
    return 'Not array'
  } else if (array.length === 0) {
    return 'Not array'
  } else {
    return {
      average: average(array),
      min: min(array),
      max: max(array),
      length: length(array)
      }
  }
}

function average(array) {
  let result = 0
  for (let i = 0; i < array.length; i++) {
    result += array[i]
  }
  return Math.floor(result / array.length)
}

function min(array) {
  let result = array[0]
  for (let i = 0; i < array.length; i++) {
    if (result > array[i]) result = array[i]
  }
  return result
}

function max(array) {
  let result = array[0]
  for (let i = 0; i < array.length; i++) {
    if (result < array[i]) result = array[i]
  }
  return result
}

function length(array) {
  return array.length
}