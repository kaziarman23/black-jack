let userRandomNum1 = Math.ceil(Math.random() * 10);
let userRandomNum2 = Math.ceil(Math.random() * 30);
let result = document.querySelector(".result");

function startGame() {
    // jack Number
    let jackNum = document.querySelector(".jackNum");
    let jackRandomNum = Math.ceil(Math.random() * 30);
    jackNum.textContent = " " + jackRandomNum;


    // user Number
    let userNum = document.querySelector(".userNum");
    userNum.textContent = userRandomNum1 + " , " + userRandomNum2;

    // sum Number
    let userSum = document.querySelector(".userSum");
    let sum = userRandomNum1 + userRandomNum2;
    userSum.textContent = sum;

    // checking winner 
    if (sum > jackRandomNum) {
        result.textContent = "Jack win the match";
    } 
    else if (sum  ===  jackRandomNum) {
        result.textContent = "You win the match";
    } 
    else {
         result.textContent = "pick another card to continue the game";
    }
}
