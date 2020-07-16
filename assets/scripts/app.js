'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')


$(() => {
  //Authentication listeners
  $("#sign-up").on('submit', authEvents.onSignUp)
  $("#sign-in").on('submit', authEvents.onSignIn)
  $("#change-password").on('submit', authEvents.onChangePassword)
  $("#sign-out").on('submit', authEvents.onSignOut)

  // Game listeners
  $("#new-game").on('click', gameEvents.onGameCreate)

  $("#one").on('click', gameEvents.onGameUpdate)
  $("#two").on('click', )
  $("#three").on('click', )
  $("#four").on('click', )
  $("#five").on('click', )
  $("#six").on('click', )
  $("#seven").on('click', )
  $("#eight").on('click', )
  $("#nine").on('click', )
})
