'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  // Authentication listeners
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // Game listeners
  $('#new-game').on('click', gameEvents.onGameCreate)
  $('.space').on('click', gameEvents.onGameUpdate)
  $('#player-stats').on('click', gameEvents.onPlayerStats)
})
