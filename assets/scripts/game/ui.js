'use strict'
const store = require('../store')
const events = require('./events')

// creating messaging for success and failure of api requests
const createGameSuccess = function (response) {
  store.game = response.game
  $('#game-board-created').text('Game on!')

  // const space = $(`[index=${currentIndex}]`)
  // space.html('x')
}

const createGameFailure = function (error) {
  $('#game-board-created').text('Could not create game')
}

const updateGameSuccess = function (response) {
  store.game = response.game
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
