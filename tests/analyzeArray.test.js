import { analyzeArray } from "../src/analyzeArray";

test('Should return object with apropriate data', () => {
  expect(analyzeArray([1, 2, 3, 4])).toEqual({
    average: 2,
    min: 1,
    max: 4,
    length: 4
  })
})

test('Should throw error if empty array', () => {
  expect(analyzeArray([])).toBe('Not array')
})

test('should throw error if only 1 value', () => {
  expect(analyzeArray([1])).toBe('Not array')
})