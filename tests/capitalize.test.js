import { capitalize } from "../src/capitalize"

test('Capital letter', () => {
  expect(capitalize('word')).toMatch(/[A-Z]{1}/)
})