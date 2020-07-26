'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('You are signed up!')

  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Sign up failed.')
}

const signInSuccess = function (response) {
  $('#message').text('Welcome! Click Play New Game to get started.')
  store.user = response.user
  $('.authenticated').show()
  $('.unauthenticated').hide()
  $('.space, #update-game').text('')

  $('form').trigger('reset')
}

const signInFailure = function () {
  $('#message').text('Sign in failed. Check your password!')
}

const changePasswordSuccess = function () {
  $('#message').show()
  $('#message').text('You\'ve changed your password!')

  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Change password failed')

  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').show()
  $('#message').text('You\'re signed out!')
  $('.unauthenticated').show()
  $('.authenticated').hide()

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
