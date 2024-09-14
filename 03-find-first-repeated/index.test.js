const { findFirstRepeated } = require('./index')

test('Returns a Number', () => {
  expect(typeof findFirstRepeated([2, 1, 3, 5, 3, 2])).toBe("number")
})

test('Should return 3', () => {
  expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toStrictEqual(3)
})

test('Should return 2', () => {
  expect(findFirstRepeated([2, 2])).toStrictEqual(2)
})

test('Should return -1 if no one is repeated', () => {
  expect(findFirstRepeated([2, 4, 3, 5, 1])).toStrictEqual(-1)
})

test('Should return -1 if passing just one number', () => {
  expect(findFirstRepeated([1])).toStrictEqual(-1)
})

test('Should return -1 if passing empty array', () => {
  expect(findFirstRepeated([])).toStrictEqual(-1)
})