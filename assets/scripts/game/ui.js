'use strict'
const store = require('../store')
const gameLogic = require('./gameLogic')

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
  $('#message').show()
  // if current player has not yet played any games - how to account for that?
  if (response.games.length === 0) {
    $('#message').text('You haven\'t played any games yet!')
  } else {
    let totalXWins = 0
    let totalOWins = 0
    for (let index = 0; index < response.games.length; index++) { // response.games is an array of objects
      const currentGame = response.games[index] // the object stored at the index of the games array
      if (currentGame.over === true) { // if the game is not over we don't want to count it
        const winner = gameLogic.getWinner(currentGame.cells) // this function returns X, O, tie, or empty string
        if (winner === 'X') {
          totalXWins++
        }
        if (winner === 'O') {
          totalOWins++
        }
      }
    }
    $('#message').text(`You've played ${response.games.length} games. X has won ${totalXWins} times and O has won ${totalOWins} times.`)
  }
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
