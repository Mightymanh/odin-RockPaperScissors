function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase();
    if (playerSelection == computerSelection) {
        // tie - re-playing the round?
        return "Tie";
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Rock")) {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));