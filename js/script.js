console.log("Hello world!");

function randomNumber(max, min) {
    return Math.floor(Math.random() * ((max + 1) - min) + 1);
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

function formatPlayerSelection(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() 
        + playerSelection.slice(1);

    return playerSelection;
}


function playRound (playerSelection, computerSelection)
{
    playerSelection = formatPlayerSelection(playerSelection);
}

// playerSelection = prompt("Please enter your move.");

console.log(formatPlayerSelection("pApEr"));


