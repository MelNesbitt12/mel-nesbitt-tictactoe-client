
'use strict'
// This file stores event handlers
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const gameLogic = require('./gameLogic')

// create two global variables to store the player turn and whether or not the game is a tie
let cellValue = 'X' // user always starts game playing as X
let isTie = false // set isTie to false as default

// onGameCreate function starts a new game
const onGameCreate = function (event) {
  event.preventDefault()

  // reset the global variables for a new game - the function that updates the board needs to be
  // able to reach these whenever a move is successfully made
  isTie = false
  cellValue = 'X'

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

// function to update the board
const onGameUpdate = function (event) {
  event.preventDefault()

  const clickedCell = event.target

  // check whether space is occupied OR game is over
  const cellOccupied = isOccupied(clickedCell)
  if (cellOccupied === true) {
    $('#update-game').html('Space taken - you can\'t click here')
  } else if (gameLogic.getWinner(store.game.cells) !== '') {
    // getWinner is a function that takes in an array of cells and returns the X, O, Tie, or ''
    // if getWinner returns X, O or Tie:
    $('#update-game').html('Stop clicking! The game is over!')
  } else {
    // if the space is empty, place mark
    placeMark(clickedCell)
    // after placing mark, send information to object
    let cellIndex = $(clickedCell).attr('data-cell-index')// the index number of the clicked space
    cellIndex = Number(cellIndex)

    // set the value of the current cell index to x or o
    store.game.cells[cellIndex] = cellValue

    // check to see if the game is over - will return X, O, Tie or ''
    let isOver = false
    const winner = gameLogic.getWinner(store.game.cells)
    // if getWinner returns X, O or Tie, the game is over
    if (winner === 'X' || winner === 'O' || winner === 'Tie') {
      isOver = true
    }
    // if getWinner returns Tie, isTie is true
    if (winner === 'Tie') {
      isTie = true
    }

    api.updateGame(cellIndex, cellValue, isOver)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)

    // update UI depending on whether the game is over or not
    if (isOver === false) {
      updateCellValue()
    } else {
      if (isTie === false) {
        $('#update-game').html('Game Over: ' + cellValue + ' wins!')
      } else {
        $('#update-game').html('It\'s a tie - play again!')
      }
      $('.over').show()
    }
  }
}

// Begin helper functions

// checks whether a space is occupied by innerHTML on the board
const isOccupied = function (clickedCell) {
  if ($(clickedCell).html()) {
    return true
  }
  return false
}
// sets the innerHTML of an unoccupied space to the value of currentValue
const placeMark = function (clickedCell) {
  $(clickedCell).html(`${cellValue}`)
}
// updates the currentPlayer value from X to O and vice versa
const updateCellValue = function () {
  if (cellValue === 'X') {
    cellValue = 'O'
    $('#update-game').html('Your Move Player O')
  } else {
    cellValue = 'X'
    $('#update-game').html('Your Move Player X')
  }
}

// End helper functions

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
  onPlayerStats
}
