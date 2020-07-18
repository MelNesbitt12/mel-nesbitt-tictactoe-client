'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGameCreate = function (event) {
  event.preventDefault()

  const newGame = event.target

  api.createGame(newGame)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

let currentPlayer = 'X'

const onGameUpdate = function (event) {
  event.preventDefault()

  const yourMove = event.target
  // check whether space is occupied
  const spaceOccupied = isOccupied(yourMove)
  if (spaceOccupied) {
    console.log('You can\'t click here')
  } else {
    // if the space is empty, place mark
    placeMark(yourMove)
    // after placing mark, send information to object
    const newIndex = $(yourMove).attr('data-cell-index')// the index value of the clicked space
    const newValue = $(yourMove).html() // the value of currentPlayer
    const isOver = false// we need to turn this into a function that will check if there are empty spaces on the board. Will be similar to isOccupied in that it will return a boolean
    const gameObject = createApiPatchObject(newIndex, newValue, isOver)
    console.log(gameObject)
    updateCurrentPlayer()

    api.updateGame(gameObject)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
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
  $(yourMove).html(`${currentPlayer}`)
}

// update the currentPlayer value from X to O and vice versa
const updateCurrentPlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

// write a function to determine whether or not the game is over
// const isOver = function ()

// get access to all of the game board spaces by their class space and loop over each one, checking to see if there are any empty spaces (based on the presence of X or O)

// create a Javascript object that represents what we want to send to the api
const createApiPatchObject = function (newIndex, newValue) { //, isOver) {
  return {
    game: {
      cell: {
        index: newIndex,
        value: newValue
      },
      over: false
    }
  }
}

module.exports = {
  onGameCreate,
  onGameUpdate
}
