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

const updateGame = function (gameObject) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: gameObject.index,
          value: gameObject.value
        },
        over: false
      }
    }
  })
}

module.exports = {
  createGame,
  updateGame
}
