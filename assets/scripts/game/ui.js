'use strict'
const store = require('../store')
const events = require('./events')
const authApi = require('../auth/ui.js')

// creating messaging for success and failure of api requests
const createGameSuccess = function (response) {
  store.game = response.game
  $('#game-board-created').text('Game on!')
  $('#message').hide()
  $('#change-password').hide()
  $('#new-game').hide()
}

const createGameFailure = function (error) {
  $('#game-board-created').text('Could not create game')
}

const updateGameSuccess = function (response) {
  store.game = response.game
  $('#game-board-created').hide()
}

const updateGameFailure = function (error) {
  $('#update-game').text('Could not update game')
}

const newGameSuccess = function (response) {
  store.game = response.game
  $('.space').text('')
  $('.play-again').show()
  $('#game-over').hide()
}

const newGameFailure = function (error) {
  console.log(newGameFailure)
  $('message').text('Could not play a new game')
}

// const playerStatsSuccess = function (response) {
//   let gameHtml = ''
//   response.game.forEach(game => {
//     const oneGame = (`
//       <h3>${games._id}`)
//   })
// }

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  newGameSuccess,
  newGameFailure
  // playerStatsSuccess,
  // playerStatsFailure
}
