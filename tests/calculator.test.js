import { calculator } from "../src/calculator"; 

test('1 + 2 = 3', () => {
  let result = calculator.add(1,2)
  expect(result).toEqual(3)
})

test('2 - 1 = 1', () => {
  expect(calculator.substract(2,1)).toEqual(1)
})

test('3 * 3 = 9', () => {
  expect(calculator.multiply(3,3)).toEqual(9)
})

test('10 / 2 = 5', () => {
  expect(calculator.divide(10,2)).toEqual(5)
})