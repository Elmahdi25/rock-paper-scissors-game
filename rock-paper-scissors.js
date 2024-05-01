/*When we reset the score, the local storage will be emptied because of the 'removeItem' method. */
/*However, if we use the '||' operator, we instruct the storage: if there's no reset, give me the values stored in the local storage.*/
/*If the local storage is empty, assign the values of the 'score' object a value of 0.*/
const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

/*if (score === null) {
            score = {
                wins: 0,
                losses: 0,
                ties: 0
            }
        }*/
/*null it's a falsy values so if i use the **!** operator i convert it to a truthy value*/
/*if (!score) {
            score = {
                wins: 0,
                losses: 0,
                ties: 0
            }
        }*/

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else {
      result = "Tie";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else {
      result = "You lose.";
    }
  } else {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img src="./images/${playerMove}-emoji.png" class="move-icon">
        <img src="./images/${computerMove}-emoji.png" class="move-icon"> Computer`;
  updateScoreElement();
}
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`;
}
function pickComputerMove() {
  const randomNumebr = Math.random();
  let computerMove = "";
  if (randomNumebr >= 0 && randomNumebr < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumebr >= 1 / 3 && randomNumebr < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}
