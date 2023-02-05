let playerScore = 0;
let computerScore = 0;
let result="";

const buttons = document.querySelectorAll('.btn')
const playerElement= document.querySelector('.player')
const computerElement= document.querySelector('.computer')
const finalResultsElement = document.querySelector('.final-results')

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value);
        showResults();
    })
})

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    let computerSelection = options[Math.floor(Math.random()*options.length)]
    return computerSelection
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
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
  }

function showResults(){
    playerElement.textContent= `Player score: ${playerScore}`
    computerElement.textContent = `Computer score: ${computerScore}`

    if(playerScore === 5 ){
        finalResultsElement.textContent = 'The player won. Congratulations!'
        playerScore = 0;
        computerScore = 0;
    } else if(computerScore === 5) {
        finalResultsElement.textContent = 'Unfortunately, this time the computer was better.'
        playerScore = 0;
        computerScore = 0;
    } else {
        finalResultsElement.textContent = ''
    }
}
