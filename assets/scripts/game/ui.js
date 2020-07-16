'use strict'

// creating messaging for success and failure of api requests

const createGameSuccess = function (response) {
  $('#game-board-created').text('Game created!')
}

const createGameFailure = function (error) {
  $('#game-board-created').text('Could not create game')
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
