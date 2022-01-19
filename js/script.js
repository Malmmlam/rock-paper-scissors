console.log("Hello world!");

function randomNumber(max, min) {
    return Math.floor(Math.random() * ((max + 1) - min) + 1);
}

function formatPlayerSelection(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() 
        + playerSelection.slice(1);

    return playerSelection;
}

function computerPlay() {
    let move = randomNumber(3, 1);
    let moveString; 

    if (move === 1) {
        moveString = "Rock";
    } 
    else if (move === 2) {
        moveString = "Paper";
    }
    else {
        moveString = "Scissors";
    }

    return moveString;
}



const buttons = document.querySelectorAll('button');
buttons.forEach(buttonPress)

function buttonPress(button) {
    button.addEventListener('click', () => {
        scoreTracker(playRound(button.id))
    });

}

const output = document.querySelector('#output');


function playRound (playerSelection)
{
    playerSelection = formatPlayerSelection(playerSelection);
    let computerSelection = computerPlay();
    let message;


    if(playerSelection === "Rock" && computerSelection === "Paper") {
        message = "Player choose rock and Computer choose paper. Computer Wins!";
        output.innerHTML = message;
        return 1;
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock") {
        message = "Player choose paper and Computer choose rock. Player Wins!";
        output.innerHTML = message;
        return 2;
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors") {
        message = "Player choose rock and Computer choose scissors. Player Wins!";
        output.innerHTML = message;
        return 2;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock") {
        message = "Player choose scissors and Computer choose rock. Computer Wins!";
        output.innerHTML = message;
        return 1;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper") {
        message = "Player choose scissors and Computer choose paper. Player Wins!";
        output.innerHTML = message;
        return 2;
    }
    else if(playerSelection === "Paper" && computerSelection === "Scissors") {
        message = "Player choose Paper and Computer choose Scissors. Computer Wins!";
        output.innerHTML = message;
        return 1;
    }
    else if(playerSelection === computerSelection) {
        message = "Player and computer choose the same. The game is a tie.";
        output.innerHTML = message;
        return 3;
    }
}

const computerScore = document.querySelector('#computer-score');
const playerScore = document.querySelector('#player-score');
const announcement = document.querySelector('#winner');

computerScore.innerHTML = 0;
playerScore.innerHTML = 0

function scoreTracker(num) {
    if(num === 1) {
        computerScore.innerHTML++;
    } else if(num === 2) {
        playerScore.innerHTML++;
    } else if(num === 3) {
        computerScore.innerHTML++;
        playerScore.innerHTML++;
    }

    if(parseInt(computerScore.innerHTML) === 5 && parseInt(playerScore.innerHTML) < 5) {
        announcement.innerHTML = "Computer Wins!";
    } else if(parseInt(playerScore.innerHTML) === 5 && parseInt(computerScore.innerHTML) < 5) {
        announcement.innerHTML = "Player Wins!";
    } else if(parseInt(playerScore.innerHTML) === 5 && parseInt(computerScore.innerHTML) === 5) {
        announcement.innerHTML = "It's a tie!"
    }
}





