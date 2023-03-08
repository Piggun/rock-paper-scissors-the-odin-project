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

function playRound(playerSelection, computerSelection) {
  let winnerDeclaration = `You Win! ${playerSelection} beats ${computerSelection}`;
  let loserDeclaration = `You Lose! ${computerSelection} beats ${playerSelection}`;
  let tieDeclaration = "It's a tie!";

  if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
    return winnerDeclaration;
  }
  else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
    return winnerDeclaration;
  }
  else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
    return winnerDeclaration;
  }
  else if (playerSelection === 'Rock' && computerSelection === 'Rock'){
    return tieDeclaration;
  }
  else if (playerSelection === 'Paper' && computerSelection === 'Paper'){
    return tieDeclaration;
  }
  else if (playerSelection === 'Scissors' && computerSelection === 'Scissors'){
    return tieDeclaration;
  }
  else {
    return loserDeclaration;
  }
}


const playerSelection = 'Scissors';
const computerSelection = getComputerChoice();

console.log(`Player Selection = ${playerSelection}`);
console.log(`Computer Selection = ${computerSelection}`);

console.log(playRound(playerSelection,computerSelection));