'use strict'

const store = require('../store')
// const api = require('./api.js')

const signUpSuccess = function () {
  $('#message').text('You are signed up!')
  $('#new-game').hide()

  $('#sign-up').hide()
}

const signUpFailure = function () {
  $('#message').text('Sign up failed - try again')
}

const signInSuccess = function (response) {
  $('#message').text('Hooray, you\'re signed in!')
  console.log(store)
  store.user = response.user
  console.log('token :', store.user.token)
  $('#hide-on-load').show()
  $('#new-game').show()
  $('.authenticated').hide()
  $('.unauthenticated').show()

  $('form').trigger('reset')
}

const signInFailure = function () {
  $('#message').text('Sign in failed - boo!')
}

const changePasswordSuccess = function () {
  $('#message').text('You\'ve changed your password!')
  $('#change-password').hide()
}

const changePasswordFailure = function () {
  $('#message').text('Change password failed')
}

const signOutSuccess = function () {
  $('#message').text('You\'re signed out!')
  $('.authenticated').show()
  $('.unauthenticated').hide()
  $('#game-over').hide()
  $('#stop-click').hide()
  $('#update-game').hide()
  $('#game-board-created').hide()
  $('.space').html('')

  $('form').trigger('reset')

  store.user = null
  store.game = null
}

const signOutFailure = function () {
  $('#message').text('Could\'nt sign you out...play again?')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
