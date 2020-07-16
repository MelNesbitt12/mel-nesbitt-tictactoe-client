'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGameCreate = function (event) {
  event.preventDefault()

  // const button = event.target
  // console.log('button is: ' + button)

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

// const onGameUpate = function (event) {
//   event.preventDefault()
//
//
// }

module.exports = {
  onGameCreate
}
