let cardOne = 10;
let cardTwo = 5;
let sum = cardOne + cardTwo;
// let result = "";
let result = document.querySelector(".result");
let sumEl = document.querySelector(".sum");
let cardEl = document.querySelector(".cards");

function startGame() {
    cardEl.textContent = "My Cards :" + cardOne + ", " + cardTwo;
    sumEl.textContent = "Sums :" + sum;

    if (sum <= 20) {
        result.textContent = "pick another card";
    } else if (sum === 21) {
        result.textContent = "you win the round";
    } else {
        result.textContent = "you lost the round";
    }
}

function newCard() {
    let card = 5;
    sum += card;
    startGame()
}
