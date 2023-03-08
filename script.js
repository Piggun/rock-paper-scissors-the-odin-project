console.log('hello world');

// create getComputerChoice function
  // returns random item between rock, paper, scissors

function getComputerChoice(){
  let choices = ["Rock", "Paper", "Scissors"];
  let randomItem = choices[Math.floor(Math.random()*choices.length)];
  return randomItem;
}
console.log(getComputerChoice());