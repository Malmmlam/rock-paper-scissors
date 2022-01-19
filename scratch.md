function playRound (playerSelection, computerSelection) {
    convert playerSelection to all lowercase

    if either playerSelection or computerSelection are "Rock" and the other has "Paper", the one with "Paper" wins. Return "Paper beats Rock" and winner
    else if either playerSelction or computerSelection are "Rock" and the other has "Scissors", the one with "Rock" wins. Return "Rock beats Scissors" and winner
    else if either playerSelection or computerSelection has "Paper" and the other has "Scissors", the one with "Scissors" wins. Return "Scissors beats paper" and winner. 
    else it is a tie.
}

function playerSelection(e) {

    if the button pressed is rock return rock,
    if the button pressed is paper return paper,
    if the button pressed is scissors return scissors
}