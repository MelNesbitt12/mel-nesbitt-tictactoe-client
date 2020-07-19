'use strict'
const config = require('../config')
const store = require('../store')

const createGame = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'POST',
    data: {}
  })
}

const updateGame = function (currentIndex, currentValue, isOver) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: currentIndex,
          value: currentValue
        },
        over: isOver
      }
    }
  })
}

// const gameOver = function (game) {
//   return $.ajax({
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     url: config.apiUrl + '/games/' + store.game._id,
//     method: 'PATCH',
//     data: {
//       game: {
//         cell: {
//           index: store.game.cell.index,
//           value: store.game.cell.value
//         },
//         over: store.game.over
//       }
//     }
//   })
// }

module.exports = {
  createGame,
  updateGame
  // gameOver
}
