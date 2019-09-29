'use strict'

let player1button = document.querySelector('.button1');
console.log(player1button);
let player2button = document.querySelector('.button2');
console.log(player2button);
let resetButton = document.querySelector('.reset');
console.log(resetButton);
let player1score = document.querySelector('.player1score');
console.log(player1score);
let player2score = document.querySelector('.player2score');
console.log(player2score);
let inputScore = document.querySelector('input');
console.log(inputScore);
let winningScore = document.querySelector('.scoreDeVictoire');
console.log(winningScore);
let score1 = 0;
let score2 = 0;
let finalScore = 5;
let gameOver = false;

function p1Button () {
    if (!gameOver) {
        score1 += 1;
    if (score1 === winningScore) {
        player1score.classList.add('winner');
        alert("Player 1 has WON !!");
        gameOver = true;
    }
    player1score.textContent = score1;
}
}

function p2Button () {
    if (!gameOver) {
        score2 += 1;
    if (score2 === winningScore) {
        player2score.classList.add('winner');
        alert("Player 2 has WON !!");
        gameOver = true;
    }
    player2score.textContent = score2;
}
}

function reset() {
    score1 = 0;
    score2 = 0;
    player1score.textContent = 0;
    player2score.textContent = 0;
    player1score.classList.remove('winner');
    player2score.classList.remove('winner');
    gameOver = false;
}

function outputScore() {
    inputScore.textContent= this.value;
    winningScore = Number(this.value);
}

player1button.addEventListener('click', p1Button);

player2button.addEventListener('click', p2Button);

resetButton.addEventListener('click', reset);