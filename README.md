# Mel Nesbitt's Tic Tac Toe Game

For my first project for General Assembly's SEI program, I created a single page tic-tac-toe
web application.
-------------------------------------------------------------------------------

## Important Links
---------------

* Link to Deployed Tic-Tac-Toe Game https://melnesbitt12.github.io/mel-nesbitt-tictactoe-client/
* My Tic-Tac-Toe GitHub Repository https://github.com/MelNesbitt12/mel-nesbitt-tictactoe-client
* Game Project Requirements https://git.generalassemb.ly/ga-wdi-boston/game-project

## Planning Story
--------------

I began my project planning by designing a wireframe of the game page and came up with user stories to drive the creation of
the game. I began by writing and testing the code for user authentication and then moved on to writing functions that supported the logic
of the game. I used a local server to consistently test changes to my code as I worked and made sure to create new branches to work on when
updating parts of my code.

I found this assignment to be very challenging and spent a lot of time writing out/talking out the game logic. I tested one or two small
changes at a time to be sure that I was understanding the problem I was trying to solve in the moment. This also helped me identify bugs
and inconsistencies in my code a lot more easily.

As part of the project requirements, my game allows a user to create an account, sign in, change their password, and sign out.
A user can also start a game and play against themself, taking turns as X and O.
When the game is over, the user is told who the winner is, is prevented from continuing to click the board, and is given the option to play again.
Users are also able to check the total number of games they've played and how many games have been won by X or O.

## User Stories:
------------

* As a player of Tic Tac Toe, I want to be able to be able to create an account and log in so that I can play the game.
* As a play of Tic Tac Toe, I want to be able to change my password.
* As a player of Tic Tac Toe, I want to be able to sign out of my account.
* As a player of Tic Tac Toe, I want to be able to log my games in my user account.
* As a player of Tic Tac Toe, I want to be able to choose the space where I place my X or O.
* As a player of Tic Tac Toe, I want to be able to be able to see if I've won or lost.
* As a player of Tic Tac Toe, I want to know whether or not the space I'm clicking on is valid.`


## Technologies Used:
-----------------

My tic-tac-toe application was built with:
  * HTML
  * CSS
  * Javascript
  * Bootstrap
  * Ajax
  * Authentication and Game API

## Unsolved Problems:
-----------------

I experienced a bug briefly with my change password ajax request; in the console, I was seeing an error 422 unprocessable entity message.
Since then, I've been able to change my password with no issue, but I want to be sure that there is no lingering bug within the code for
changing a password.

I would like to figure out how to get the Change Password form, Sign Out button, and Total Games played button to live in the middle
of the page instead of against the left side of the page. All three elements are set to display: hidden upon page load in my index.scss file.
When I unhide them, I haven't figured out how to change their display property so that I can move them to the center of the page.

If a user has only played one game OR X or O has only one won game, when the user clicks on the Total Games Played button,
the verb tense is plural: "You have played one games." I'll need to go in and fix this so that the verb tense is correct for this situation!

I have repeated code in my index.scss file that I need to dry up - I'm targeting elements individually to give them hover
and focus properties. I want to be able to combine them all together.

## Images
------
* Updated Tic Tac Toe Wireframe https://imgur.com/a/llrsrij
