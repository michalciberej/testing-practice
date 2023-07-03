import { ceasarCipher } from "../src/caesarCipher";

test('Should return ciphered input', () => {
  expect(ceasarCipher('hElloZ', 1)).toBe('iFmmpA')
})

test('Should return ciphered input with correct punctuation', () => {
  expect(ceasarCipher('_!?,acw/[]{()}.-/', 7)).toBe('_!?,hjd/[]{()}.-/')
})