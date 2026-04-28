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

const humanScoreElement = document.querySelector('#humanScore');
const computerScoreElement = document.querySelector('#computerScore');
const resultElement = document.querySelector('#result');

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultElement.textContent = "It's a tie!";
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        resultElement.textContent = "You win! Rock beats scissors.";
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        resultElement.textContent = "You win! Paper beats rock.";
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        resultElement.textContent = "You win! Scissors beats paper.";
        humanScore++;
    } else {
        resultElement.textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
        computerScore++;
    }
    
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;

    if (humanScore === 5) {
        alert("You win the game!");
        humanScore = 0;
        computerScore = 0;
        resultElement.textContent = "";
    } else if (computerScore === 5) {
        alert("You lose the game.");
        humanScore = 0;
        computerScore = 0;
        resultElement.textContent = "";
    }
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});