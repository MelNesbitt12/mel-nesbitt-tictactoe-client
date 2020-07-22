'use strict'

// Given an array of cells, function returns 'X', '0', 'Tie', or ''
const getWinner = function (cells) {
  if (allCellsMatch(cells[0], cells[1], cells[2])) {
    return cells[0]
  }
  if (allCellsMatch(cells[3], cells[4], cells[5])) {
    return cells[3]
  }
  if (allCellsMatch(cells[6], cells[7], cells[8])) {
    return cells[6]
  }
  if (allCellsMatch(cells[0], cells[3], cells[6])) {
    return cells[0]
  }
  if (allCellsMatch(cells[1], cells[4], cells[7])) {
    return cells[1]
  }
  if (allCellsMatch(cells[2], cells[5], cells[8])) {
    return cells[2]
  }
  if (allCellsMatch(cells[2], cells[4], cells[6])) {
    return cells[2]
  }
  if (allCellsMatch(cells[0], cells[4], cells[8])) {
    return cells[0]
  }
  // we need to check to see if the game board is full. We do this by looping over the array of cells and checking to see if any cells are ''. We use indexOf to check. If none of the cells are empty, -1 (the default) will return.
  if (cells.indexOf('') === -1) {
    return 'Tie'
  }
  return '' // this means the game is not over.
}

// This function takes as parameters three cell values.
// First, it checks whether all of the values are the same. THEN, it checks whether all of the values are empty strings. If they are empty strings, return false. If they aren't empty strings, they are either X or O, so return true.
const allCellsMatch = function (cellVal1, cellVal2, cellVal3) {
  if (cellVal1 === cellVal2 && cellVal2 === cellVal3 && cellVal3 === cellVal1) {
    if (cellVal1 !== '') {
      return true
    } else {
      return false
    }
  } else {
    return false // return false if the values are not the same.
  }
}

module.exports = {
  getWinner
}
