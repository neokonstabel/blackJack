let firstCard = getRandomCard() ;
let secondCard = getRandomCard();
let sum = firstCard + secondCard;
let cardsArray = [firstCard,secondCard]
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard(){
  let randomNumber = Math.floor(Math.random() * 14+ 1)
  return randomNumber
}

function startGame(){
  renderGame()
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cardsArray.length; i++) {
    cardsEl.textContent += cardsArray[i] + " "
    
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
  let newCard = getRandomCard();
  sum += newCard
  cardsArray.push(newCard)
  renderGame()
}

