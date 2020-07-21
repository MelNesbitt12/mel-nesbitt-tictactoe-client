'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('You are signed up!')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Sign up failed - try again')
}

const signInSuccess = function (response) {
  $('#message').text('Hooray, you\'re signed in!')
  store.user = response.user
  console.log('token :', store.user.token)
  $('.authenticated').show()
  $('.unauthenticated').hide()
  $('.space, #update-game').text('')

  $('form').trigger('reset')
}

const signInFailure = function () {
  $('#message').text('Sign in failed - boo!')
}

const changePasswordSuccess = function () {
  $('#message').text('You\'ve changed your password!')
  // $('#change-password').hide()
}

const changePasswordFailure = function () {
  $('#message').text('Change password failed')
}

const signOutSuccess = function () {
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
