'use strict'

const getWinner = function (cells) {
  if (allMatch(cells[0], cells[1], cells[2])) {
    return cells[0]
  }
  if (allMatch(cells[3], cells[4], cells[5])) {
    return cells[3]
  }
  if (allMatch(cells[6], cells[7], cells[8])) {
    return cells[6]
  }
  if (allMatch(cells[0], cells[3], cells[6])) {
    return cells[0]
  }
  if (allMatch(cells[1], cells[4], cells[7])) {
    return cells[1]
  }
  if (allMatch(cells[2], cells[5], cells[8])) {
    return cells[2]
  }
  if (allMatch(cells[2], cells[4], cells[6])) {
    return cells[2]
  }
  if (allMatch(cells[0], cells[4], cells[8])) {
    return cells[0]
  }
  // we need to check to see if the game board is full. We do this by looping over the array of cells and checking to see if any cells are ''. We use indexOf to check.
  if (cells.indexOf('') === -1) {
    // isTie = true
    return 'Tie'
  }
  return ''
}

// ex allMatch(game.cell[0], game.cell[1], game.cell[2]) { }
const allMatch = function (index1Value, index2Value, index3Value) {
  if (index1Value === index2Value && index2Value === index3Value && index3Value === index1Value && index1Value) {
    return true
  } else {
    return false
  }
}

module.exports = {
  getWinner,
  allMatch
}
