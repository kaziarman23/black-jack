// git push :1


let cards = [];
let sum = 0;
let isAlive = false;
let blackJack = true;
let result = document.querySelector(".result");
let sumEl = document.querySelector(".sum");
let cardEl = document.querySelector(".cards");
// All values are empty in the beginning

//After clicking the the start button this function will Invoked/Run/Call.
function startGame() {
    let cardOne = getRandomNumber();
    let cardTwo = getRandomNumber();
    cards = [cardOne, cardTwo];
    sum = cardOne + cardTwo;
    isAlive = true;
    randerGame();
}

function randerGame() {
    // This will show what cards the user have.
    cardEl.textContent = "My Cards :";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }

    // This will show the total number of the cards.
    sumEl.textContent = "Sums :" + sum;
    if (sum <= 20) {
        result.textContent = "pick another card";
        isAlive = true;
        blackJack = false;
    } else if (sum === 21) {
        result.textContent = "you win the round";
        blackJack = true;
    } else {
        result.textContent = "you lost the round";
        isAlive = false;
        blackJack = false;
    }
}

function newCard() {
    //This function will genarated a new card for the user.If the user is still on the game.
    if (isAlive === true && blackJack === false) {
        let card = getRandomNumber();
        sum += card;
        cards.push(card);
        randerGame();
    }
}

function getRandomNumber() {
    // This function will genarated a Random card number.
    let randomNum = Math.ceil(Math.random() * 13);
    if (randomNum === 1) {
        return 11;
    } else if (randomNum > 10) {
        return 10;
    } else {
        return randomNum;
    }
}
