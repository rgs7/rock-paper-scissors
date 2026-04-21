function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    const answer = prompt("Enter your choice: rock, paper, or scissors");
    return answer.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();