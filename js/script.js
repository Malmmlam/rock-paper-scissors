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

function playRound (playerSelection, computerSelection)
{
    playerSelection = formatPlayerSelection(playerSelection);

    if(playerSelection === "Rock" && computerSelection === "Paper") {
        return "Player choose rock and Computer choose paper. Computer Wins!"
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock") {
        return "Player choose paper and Computer choose rock. Player Wins!"
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors") {
        return "Player choose rock and Computer choose scissors. Player Wins!"
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock") {
        return "Player choose scissors and Computer choose rock. Computer Wins!"
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper") {
        return "Player choose scissors and Computer choose paper. Player Wins!"
    }
    else if(playerSelection === "Paper" && computerSelection === "Scissors") {
        return "Player choose Paper and Computer choose Scissors. Computer Wins!"
    }
    else if(playerSelection === computerSelection) {
        return "Player and computer choose the same. The game is a tie."
    }
}

function game() {
    
    let playCounter;
    let playerScore = 0;
    let computerScore = 0;
    


    for(playCounter = 0; playCounter < 5; playCounter++) {

        let playerSelection = computerPlay();
        let computerSelection = computerPlay();
        
        if(playRound(playerSelection, computerSelection).endsWith("Computer Wins!")) {
            computerScore++;
            console.log(`Computer won this round. Computer Score: ${computerScore}`);
        }
        else if(playRound(playerSelection, computerSelection).endsWith("Player Wins!")) {
            playerScore++;
            console.log(`Player won this round. Player Score: ${playerScore}`);
        }
        else if(playRound(playerSelection, computerSelection).endsWith("The game is a tie.")) {
            computerScore++;
            playerScore++;
            console.log(`This round was a tie. Computer Score ${computerScore}, Player Score ${playerScore}`)
        }
    }

    if(computerScore > playerScore) {
        return "Computer Wins!"
    } 
    else if(playerScore > computerScore) {
        return "Player Wins!"
    }
    else {
        return "The game is a tie."
    }

}

// let playerSelection = prompt("Please enter your move.");


console.log(game());


