'use strict'

// creating messaging for success and failure of api requests
const createGameSuccess = function (response) {
  $('#game-board-created').text('Game created!')
  //
  // const currentIndex = 0
  //
  // response.game.cells[currentIndex] = 'x'
  // const space = $(`[index=${currentIndex}]`)
  // space.html('x')
}


const createGameFailure = function (error) {
  $('#game-board-created').text('Could not create game')
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
