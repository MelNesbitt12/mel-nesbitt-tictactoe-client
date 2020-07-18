'use strict'
const store = require('../store')

// creating messaging for success and failure of api requests
const createGameSuccess = function (response) {
  $('#game-board-created').text('Game created!')

  store.game = response.game
  console.log('game id: ' + store.game._id)
  // const space = $(`[index=${currentIndex}]`)
  // space.html('x')
}

const createGameFailure = function (error) {
  $('#game-board-created').text('Could not create game')
}

const updateGameSuccess = function (response) {
  $('#update-game').text('Board updated!')

  store.game = response.game
  // console.log('game id: ' + store.ID)
}

const updateGameFailure = function (error) {
  $('#update-game').text('Could not update game')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure
}
