
/*This is the function I use to randomly get rock, paper, or scissors from the computer.

-Defines an object called 'options' with three properties which corresponds to either rock, paper or scissors.

-The function then generates a random number between 0 and 2 using the math.random function and multiplies it by 3 which results in a random number between 0 and 2.

-The math.floor function is used to round the random number down to the nearest integer which makes it so the result will always be a number betwwen 0 and 2.

-Then the rounded number is added to one which results in a number between 1 and 3 which we use to access the corresponding option.
*/
function getComputerChoice(){
  let options = {1:"rock", 2: "paper", 3: "scissors"}
  return options[Math.floor(Math.random() *3) + 1];
}

/* Used this to test that getComputerChoice function is working properly.

let test = getComputerChoice();
console.log(test);
*/

// Used to get prompt from the user, .toLowerCase is used to make sure the input will be case insensitive.
let playerSelection = prompt("Type rock,paper,or scissors").toLowerCase();

// The main function to play the game. Uses a series of if and else if statements for the possible results from RPS, including a tie.
function playRound(playerSelection, computerSelection){
if (playerSelection === "rock" && computerSelection === "paper"){
  console.log(
    `You chose ${playerSelection} and the computer chose ${computerSelection}. Paper beats rock. You lose!`
  )
}
else if (playerSelection === "paper" && computerSelection === "rock"){
  console.log(
    `You chose ${playerSelection} and the computer chose ${computerSelection}. Paper beats rock. You win!`
  )
}
else if (playerSelection === "rock" && computerSelection === "scissors"){
  console.log(
    `You chose ${playerSelection} and the computer chose ${computerSelection}. Rock beats scissors. You win!`
  )
}
else if (playerSelection === "scissors" && computerSelection === "rock"){
  console.log(
    `You chose ${playerSelection} and the computer chose ${computerSelection}. Rock beats scissors. You lose!`
  )
}
else if (playerSelection === "scissors" && computerSelection === "paper"){
  console.log(
    `You chose ${playerSelection} and the computer chose ${computerSelection}. Scissors beats paper. You win!`
  )
}
else if (playerSelection === "paper" && computerSelection === "scissors"){
  console.log(
    `You chose ${playerSelection} and the computer chose ${computerSelection}. Scissors beats paper. You lose!`
  )
}
else if (playerSelection === computerSelection){
  console.log(
    `You chose ${playerSelection} and the computer chose ${computerSelection}. Tie!`
  )
}
}

//Declares the computerSelection variable which gets input from my getComputerChoice function
const computerSelection = getComputerChoice();

//Invokes the playRound function and prints the results to the console.
console.log(playRound(playerSelection, computerSelection));