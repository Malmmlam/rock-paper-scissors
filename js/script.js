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
    let message

    if(playerSelection === "Rock" && computerSelection === "Paper") {
        message = "Player choose rock and Computer choose paper. Computer Wins!";
        console.log(message);
        return message;
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock") {
         message = "Player choose paper and Computer choose rock. Player Wins!";
         console.log(message);
         return message;
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors") {
        message = "Player choose rock and Computer choose scissors. Player Wins!";
        console.log(message);
        return message;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock") {
        message = "Player choose scissors and Computer choose rock. Computer Wins!";
        console.log(message);
        return message;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper") {
        message = "Player choose scissors and Computer choose paper. Player Wins!";
        console.log(message);
        return message;
    }
    else if(playerSelection === "Paper" && computerSelection === "Scissors") {
        message = "Player choose Paper and Computer choose Scissors. Computer Wins!";
        console.log(message);
        return message;
    }
    else if(playerSelection === computerSelection) {
        message = "Player and computer choose the same. The game is a tie.";
        console.log(message);
        return message;
    }
}

function game() {
    
    let playCounter;
    let playerScore = 0;
    let computerScore = 0;
    


    for(playCounter = 0; playCounter < 5; playCounter++) {

        let playerSelection = prompt("Please enter your move.")
        let computerSelection = computerPlay();
        
        if(playRound(playerSelection, computerSelection).endsWith("Computer Wins!")) {
            computerScore++;
            console.log(`Computer won this round. Computer Score: ${computerScore}, Player Score: ${playerScore}`);
        }
        else if(playRound(playerSelection, computerSelection).endsWith("Player Wins!")) {
            playerScore++;
            console.log(`Player won this round. Computer Score: ${computerScore}, Player Score: ${playerScore}`);
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

console.log(game());


