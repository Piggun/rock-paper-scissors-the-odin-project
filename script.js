// declare getComputerChoice function
  // returns random item between rock, paper, scissors

function getComputerChoice(){
  let choices = ["Rock", "Paper", "Scissors"];
  let randomItem = choices[Math.floor(Math.random()*choices.length)];
  return randomItem;
}

// declare playRound function that takes two parameters (playerSelection, computerSelection)
    // returns a string that declares the winner of the round
    // if playerSelection === 'Rock' & computerSelection === 'Scissors'
      // you win
    // elif playerSelection === 'Paper' & computerSelection === 'Rock'
      // you win
    // elif playerSelection === 'Scissors' & computerSelection === 'Paper'
      // you win
    // elif playerSelection === 'Rock' & computerSelection === 'Rock'
      // tie
    // elif playerSelection === 'Paper' & computerSelection === 'Paper'
      // tie
    // elif playerSelection === 'Scissors & computerSelection === 'Scissors'
      // tie
    //else
      // you lose

let playerScore = 0;
let computerScore = 0;

// declare function that gets input from the user
function getPlayerChoice(){
  let playerChoice = prompt("Rock, Paper or Scissors?");
  // capitalize first character and lowercase rest of the characters for case insesitive comparison
  playerChoice = playerChoice.toLowerCase();
  return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
}

function playRound() {
  let computerSelection = getComputerChoice();
  let playerSelection = getPlayerChoice();

  let result;
  let winnerDeclaration = `You Win! ${playerSelection} beats ${computerSelection}`;
  let loserDeclaration = `You Lose! ${computerSelection} beats ${playerSelection}`;
  let tieDeclaration = "It's a tie!";

  if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
    playerScore += 1;
    result = winnerDeclaration;
  }
  else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
    playerScore += 1;
    result = winnerDeclaration;
  }
  else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
    playerScore += 1;
    result = winnerDeclaration;
  }
  else if (playerSelection === 'Rock' && computerSelection === 'Rock'){
    result = tieDeclaration;
  }
  else if (playerSelection === 'Paper' && computerSelection === 'Paper'){
    result = tieDeclaration;
  }
  else if (playerSelection === 'Scissors' && computerSelection === 'Scissors'){
    result = tieDeclaration;
  }
  else {
    computerScore += 1;
    result = loserDeclaration;
  }
  console.log(result);
  return result;
}


// declare function called game
    // loops 5 times the playRound function
    // keeps score and reports winner at the end

function game() {
  for (i = 0; i < 5; i++) {
    playRound();
    console.log(`Player score : ${playerScore}`);
    console.log(`Computer score : ${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log(`FINAL WINNER : You Win with a score of ${playerScore} to ${computerScore}!`);
  }
  else if (playerScore === computerScore) {
    console.log("FINAL WINNER : It's a tie!");
  }
  else {
    console.log(`FINAL WINNER : You Lose with a score of ${playerScore} to ${computerScore}!`)
  }
}

game();