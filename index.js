let options = ["rock", "paper", "scissors"]
let result = ""
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerSelection = options[Math.floor(Math.random()*options.length)]
    return computerSelection
}

function getplayerSelection(){
    let playerSelection = prompt("What's your choice?");
    return playerSelection = playerSelection.toLowerCase()
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        result = "It's a draw"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "You Win! Rock beats Scissors"
        playerScore = playerScore + 1;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You Lose! Paper beats Rock"
        computerScore = computerScore + 1
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "You Win! Paper beats Rock"
        playerScore = playerScore + 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You Lose! Scissors beats Paper"
        computerScore = computerScore + 1
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "You Win! Scissors beats Paper"
        playerScore = playerScore + 1;
    } else {
        result = "You Lose! Rock beats Scissors"
        computerScore = computerScore + 1
    }

    return result
  }



  function game() {

    for (let i = 0; i < 5; i++){
        const playerSelection = getplayerSelection();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore){
        alert("The Winner is Player")
    } else if (playerScore < computerScore) {
        alert("The Winner is Computer")
    } else {
        alert("None win this time")
    }

    playerScore = 0;
    computerScore = 0;
  }
