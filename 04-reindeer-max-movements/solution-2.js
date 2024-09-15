const maxDistance = (movements) => {
  const rightMovements = movements.match(/>/g)?.length ?? 0
  const leftMovements = movements.match(/</g)?.length ?? 0
  const freeMovements = movements.length - (leftMovements + rightMovements)
  
  return leftMovements > rightMovements 
  ? (leftMovements + freeMovements) - rightMovements 
  : (rightMovements + freeMovements) - leftMovements
}

module.exports = { maxDistance }