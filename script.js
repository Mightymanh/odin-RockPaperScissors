function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase();
    if (playerSelection == computerSelection) {
        // tie - re-playing the round?
        console.log("Tie! Play this round again.");
        playerSelection = prompt("Enter your play: it is either Rock or Paper or Scissors");
        computerSelection = getComputerChoice();
        return playRound(playerSelection, computerSelection);
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Rock")) {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        playerSelection = prompt("Enter your play: it is either Rock or Paper or Scissors");
        console.log(playerSelection);
        while (playerSelection == null || (playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors")) {
            playerSelection = prompt("Input again!!! it is either Rock or Paper or Scissors");
            console.log(playerSelection);
        }
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(`Round ${i}: ${result}`);
    }
}
