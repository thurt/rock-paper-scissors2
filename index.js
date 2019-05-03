let wins = 0;
let losses = 0;
let ties = 0;

// this function
// 1. returns "rock"/"paper"/"scissors" based on a random integer
function computersMove() {
  let randInt = Math.floor(Math.random() * 3); // generates 0, 1, or 2
  if (randInt === 0) {
    return "rock";
  }
  if (randInt === 1) {
    return "paper";
  }
  if (randInt === 2) {
    return "scissors";
  }
}

// this function
// 1. increments the wins/ties/losses depending on the result
// 2. updates the number of wins/ties/losses displayed on the website
function updateScore(result) {
  // result one of "won" or "tied" or "lost"
  if (result === "won") {
    wins = wins + 1;
    document.getElementById("wins").innerHTML = wins;
  }
  if (result === "tied") {
    ties = ties + 1;
    document.getElementById("ties").innerHTML = ties;
  }
  if (result === "lost") {
    losses = losses + 1;
    document.getElementById("losses").innerHTML = losses;
  }
}
        
// this function
// 1. calls computersMove to get the computer's move
// 2. determines whether the user has "won"/"tied"/"lost" based on computer's move
// 3. calls updateScore and passes the result "won"/"tied"/"lost" as a parameter
// 4. alerts the user of the computers move and the results
function onClickRock() {
  let cm = computersMove();
  if (cm === "rock") {
    // tied
    updateScore("tied");
    alert("The computer picked rock. That means you tied!");
  }
  if (cm === "paper") {
    // lost
    updateScore("lost");
    alert("The computer picked paper. That means you lost!");
  }
  if (cm === "scissors") {
    // won
    updateScore("won");
    alert("The computer picked scissors. That means you won!");
  }
}

function onClickPaper() {}

function onClickScissors() {}

document.getElementById("rock").onclick = onClickRock;
document.getElementById("paper").onclick = onClickPaper;
document.getElementById("scissors").onclick = onClickScissors;
