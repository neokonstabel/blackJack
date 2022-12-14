let player = {
  name: "Nota",
  chips: 45,
};
let sum = 0;
let cardsArray = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $ " + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13 + 1);
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cardsArray = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cardsArray.length; i++) {
    cardsEl.textContent += cardsArray[i] + " ";
  }
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
  console.log(message);
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let newCard = getRandomCard();
    sum += newCard;
    cardsArray.push(newCard);
    renderGame();
  }
}
