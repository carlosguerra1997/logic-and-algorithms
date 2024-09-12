const isArmstrongNumber = (number) => {
  const length = number.toString().length

  let result = 0
  Array.from(String(number), Number).forEach((number) => {
    const sum = Math.pow(number, length)
    result += sum
  })

  if (result !== number) return false
  return true
};

module.exports = { isArmstrongNumber }