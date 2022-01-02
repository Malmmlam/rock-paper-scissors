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

function playerMove () {
    
}

console.log(computerPlay());