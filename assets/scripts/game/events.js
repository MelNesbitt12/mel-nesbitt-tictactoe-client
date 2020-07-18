'use strict'
const gameApi = require('./api')
const authApi = require('../auth/api')
const ui = require('./ui')
// const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store')

const onGameCreate = function (event) {
  event.preventDefault()

  const newGame = store.user.token

  gameApi.createGame(newGame)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

let currentPlayer = 'x'

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
    let currentIndex = $(yourMove).attr('data-cell-index')// the index value of the clicked space
    currentIndex = Number(currentIndex)

    const currentValue = currentPlayer // the value of currentPlayer
    const isOver = false// we need to turn this into a function that will check if there are empty spaces on the board. Will be similar to isOccupied in that it will return a boolean

    updateCurrentPlayer()

    gameApi.updateGame(currentIndex, currentValue, isOver)
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
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
}

// write a function to determine whether or not the game is over
// takes array of cells as input and returns true if the game is over, false if otherwise
//ex: isOver (['x','x','x','','','','','','']) => true
// const isOver = function (cellData) {
//   const allMatch = function(index1, index2, index3) {
//     if()
//   }
// }


module.exports = {
  onGameCreate,
  onGameUpdate
}
