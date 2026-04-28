const CHOICES = ['rock', 'paper', 'scissors'];
/** What each choice beats (for outcome logic). */
const BEATS = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
const WINNING_SCORE = 5;

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

let humanScore = 0;
let computerScore = 0;

const humanScoreElement = document.querySelector('#humanScore');
const computerScoreElement = document.querySelector('#computerScore');
const resultElement = document.querySelector('#result');

function formatChoice(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    resultElement.textContent = '';
    humanScoreElement.textContent = '0';
    computerScoreElement.textContent = '0';
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultElement.textContent = "It's a tie!";
    } else if (BEATS[humanChoice] === computerChoice) {
        resultElement.textContent =
            `You win! ${formatChoice(humanChoice)} beats ${computerChoice}.`;
        humanScore++;
    } else {
        resultElement.textContent =
            `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;

    if (humanScore === WINNING_SCORE) {
        alert('You win the game!');
        resetGame();
    } else if (computerScore === WINNING_SCORE) {
        alert('You lose the game.');
        resetGame();
    }
}

for (const choice of CHOICES) {
    document.querySelector(`#${choice}`).addEventListener('click', () => {
        playRound(choice, getComputerChoice());
    });
}
