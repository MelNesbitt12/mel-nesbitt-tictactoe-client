'use strict'
const api = require('./api')
const ui = require('./ui')
// const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store')

const onGameCreate = function (event) {
  event.preventDefault()

  const newGame = store.user.token

  api.createGame(newGame)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

let currentValue = 'X'

const onGameUpdate = function (event) {
  event.preventDefault()

  const yourMove = event.target

  // check whether space is occupied OR game is over
  const spaceOccupied = isOccupied(yourMove)
  if (spaceOccupied === true) {
    $('#stop-click').html('Space taken - you can\'t click here')
  } else if (isGameOver() === true) {
    $('#stop-click').html('Stop clicking! The game is over!')
  } else {
    // if the space is empty, place mark
    placeMark(yourMove)
    // after placing mark, send information to object
    let currentIndex = $(yourMove).attr('data-cell-index')// the index value of the clicked space
    currentIndex = Number(currentIndex)

    // set the value of the current cell index to x or o
    store.game.cells[currentIndex] = currentValue

    // check to see if the game is over - should return true or false
    const isOver = isGameOver()
    console.log('Updating game', isOver)
    // we need to turn this into a function that will check if there are empty spaces on the board. Will be similar to isOccupied in that it will return a boolean

    api.updateGame(currentIndex, currentValue, isOver)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)

    if (isOver === false) {
      updateCurrentValue()
    } else {
      $('#game-over').html('Game Over! ' + currentValue + ' wins!')
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
    $('#update-game').html('Your move, O')
  } else {
    currentValue = 'X'
    $('#update-game').html('Your move, X')
  }
}

// write a function to determine whether or not the game is over
// takes array of cells as input and returns true if the game is over, false if otherwise
// ex: isOver (['x','x','x','','','','','','']) => true
const isGameOver = function () {
  console.log(store.game.cells)
  if (allMatch(store.game.cells[0], store.game.cells[1], store.game.cells[2])) {
    return true
  }
  if (allMatch(store.game.cells[3], store.game.cells[4], store.game.cells[5])) {
    return true
  }
  if (allMatch(store.game.cells[6], store.game.cells[7], store.game.cells[8])) {
    return true
  }
  if (allMatch(store.game.cells[0], store.game.cells[3], store.game.cells[6])) {
    return true
  }
  if (allMatch(store.game.cells[1], store.game.cells[4], store.game.cells[7])) {
    return true
  }
  if (allMatch(store.game.cells[2], store.game.cells[5], store.game.cells[8])) {
    return true
  }
  if (allMatch(store.game.cells[2], store.game.cells[4], store.game.cells[6])) {
    return true
  }
  if (allMatch(store.game.cells[0], store.game.cells[4], store.game.cells[8])) {
    return true
  }
  return false
}

// ex allMatch(game.cell[0], game.cell[1], game.cell[2]) { }
const allMatch = function (index1Value, index2Value, index3Value) {
  console.log(index1Value, index2Value, index3Value)
  if (index1Value === index2Value && index2Value === index3Value && index3Value === index1Value && index1Value) {
    return true
  } else {
    return false
  }
}

module.exports = {
  onGameCreate,
  onGameUpdate
}
