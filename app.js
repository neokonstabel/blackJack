let firstCard = 11;
let secondCard = 8;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");

function startGame() {
  if (sum <= 20) {
    message = "Do you want another draw?";
  } else if (sum === 21) {
    message = "You have blackjack!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  console.log(message);
}
