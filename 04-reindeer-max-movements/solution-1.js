const maxDistance = (movements) => {
  const movementsArray = Array.from(movements)

  const leftMovements = movementsArray
    .filter(movement => movement === '<')
    .length

  const rightMovements = movementsArray
    .filter(movement => movement === '>')
    .length

  const freeMovements = movementsArray.length - (leftMovements + rightMovements)
  
  return leftMovements > rightMovements 
    ? (leftMovements + freeMovements) - rightMovements 
    : (rightMovements + freeMovements) - leftMovements
}

module.exports = { maxDistance }