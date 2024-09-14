const findFirstRepeated = (gifts) => {
  const repeated = gifts.filter((gift, i) => gifts.indexOf(gift) !== i)
  return repeated.length > 0 ? repeated[0] : -1
}

module.exports = { findFirstRepeated }