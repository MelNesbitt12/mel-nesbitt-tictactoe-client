'use strict'
const store = require('../store')

// creating messaging for success and failure of api requests
const createGameSuccess = function (response) {
  store.game = response.game
  $('#update-game').text('Your Move Player X')
  $('.space').text('')
  $('.not-started').hide()
}

const createGameFailure = function (error) {
  $('#update-game').text('Could not create game')
}

const updateGameSuccess = function (response) {
  store.game = response.game
}

const updateGameFailure = function (error) {
  $('#update-game').text('Could not update game')
}

const playerStatsSuccess = function (response) {
  // console.log(response)
  let totalXWins = 0
  let totalOWins = 0
  for (let index = 0; index < response.games.length; index++) {
    const currentGame = response.games[index] // the object stored at the index of the games array
    if (currentGame.over === true) {
      const winner = getWinner(currentGame.cells)
      if (winner === 'X') {
        totalXWins++
      }
      if (winner === 'O') {
        totalOWins++
      }
    }
    $('#message').show()
    $('#message').text(`You've played ${response.games.length} games. X has won ${totalXWins} times and O has won ${totalOWins} times`)
  }
}

const playerStatsFailure = function (error) {
  $('#message').text('Could not get your stats')
}

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
const allMatch = function (index1Value, index2Value, index3Value) {
  if (index1Value === index2Value && index2Value === index3Value && index3Value === index1Value && index1Value) {
    return true
  } else {
    return false
  }
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  playerStatsSuccess,
  playerStatsFailure
}
