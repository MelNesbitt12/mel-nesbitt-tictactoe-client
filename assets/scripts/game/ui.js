'use strict'
const store = require('../store')
const events = require('./events')

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
  console.log(response)
  console.log(response.games.length)
  $('#message').show()
  $('#message').text('You\'ve played ' + response.games.length + ' games')
}

const playerStatsFailure = function (error) {
  $('#message').text('Could not get your stats')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  playerStatsSuccess,
  playerStatsFailure
}
