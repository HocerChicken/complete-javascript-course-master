'use strict';

const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const number = document.querySelector('.number');
const body = document.querySelector('body');
const again = document.querySelector('.again');
const guess = document.querySelector('.guess');

let secretNumber = Math.floor(Math.random() * 20) + 1;
let scoreDefault = 20;
let highscore = 0;
// number.textContent = secretNumber;

const displayMessage = function (mes) {
  message.textContent = mes;
};

const btnCheck = document.querySelector('.check');
btnCheck.addEventListener('click', function () {
  const guessValue = Number(guess.value);

  // When there is no input
  if (!guessValue) {
    message.textContent = 'No number!';
    // When player wins
  } else if (guessValue === secretNumber) {
    displayMessage('🎉 Correct Number!');
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;

    if (scoreDefault > highscore) {
      highscore = scoreDefault;
      highScore.textContent = highscore;
    }
    // when guess is too high
  } else if (guessValue !== secretNumber) {
    if (scoreDefault > 1) {
      displayMessage(
        guessValue > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      scoreDefault--;
      score.textContent = scoreDefault;
    } else {
      displayMessage('💥 You lost the game!');
      score.textContent = 0;
    }
  }
});

again.addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  number.textContent = '?';

  displayMessage('Start guessing...');
  scoreDefault = 20;
  guess.value = '';
  score.textContent = scoreDefault;
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
