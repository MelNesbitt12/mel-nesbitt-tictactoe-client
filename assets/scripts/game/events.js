'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

let currentValue = 'X'
let isTie = false

const onGameCreate = function (event) {
  event.preventDefault()

  const newGame = store.user.token
  isTie = false
  currentValue = 'X'

  api.createGame(newGame)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onGameUpdate = function (event) {
  event.preventDefault()

  const yourMove = event.target

  // check whether space is occupied OR game is over
  const spaceOccupied = isOccupied(yourMove)
  if (spaceOccupied === true) {
    $('#update-game').html('Space taken - you can\'t click here')
  } else if (getWinner(store.game.cells) !== '') {
    $('#update-game').html('Stop clicking! The game is over!')
  } else {
    // if the space is empty, place mark
    placeMark(yourMove)
    // after placing mark, send information to object
    let currentIndex = $(yourMove).attr('data-cell-index')// the index value of the clicked space
    currentIndex = Number(currentIndex)

    // set the value of the current cell index to x or o
    store.game.cells[currentIndex] = currentValue

    // check to see if the game is over - should return true or false
    const winner = getWinner(store.game.cells)
    const isOver = winner !== ''
    // we need to turn this into a function that will check if there are empty spaces on the board. Will be similar to isOccupied in that it will return a boolean

    api.updateGame(currentIndex, currentValue, isOver)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)

    if (isOver === false) {
      updateCurrentValue()
    } else {
      if (isTie === false) {
        $('#update-game').html('Game Over: ' + currentValue + ' wins! Play Again?')
      } else {
        $('#update-game').html('It\'s a tie!')
      }
      $('.over').show()
    }
  }
}
// write a function to check whether a space is occupied by innerHTML on the board
const isOccupied = function (yourMove) {
  if ($(yourMove).html()) {
    return true
  }
  return false
}
// set the innerHTML of an unoccupied space to the value of currentPlayer
const placeMark = function (yourMove) {
  $(yourMove).html(`${currentValue}`)
}
// update the currentPlayer value from X to O and vice versa
const updateCurrentValue = function () {
  if (currentValue === 'X') {
    currentValue = 'O'
    $('#update-game').html('Your Move Player O')
  } else {
    currentValue = 'X'
    $('#update-game').html('Your Move Player X')
  }
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

// ex allMatch(game.cell[0], game.cell[1], game.cell[2]) { }
const allMatch = function (index1Value, index2Value, index3Value) {
  if (index1Value === index2Value && index2Value === index3Value && index3Value === index1Value && index1Value) {
    return true
  } else {
    return false
  }
}

const onPlayerStats = function (event) {
  event.preventDefault()

  const playerGames = store.user.token

  api.playerStats(playerGames)
    .then(ui.playerStatsSuccess)
    .catch(ui.playerStatsFailure)
}

module.exports = {
  onGameCreate,
  onGameUpdate,
  onPlayerStats,
  getWinner
}
