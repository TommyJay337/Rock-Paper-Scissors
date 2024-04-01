function getComputerChoice() {

    let options = ["rock","paper","scissors"];
    let randomOptions = options[Math.floor(Math.random()*options.length)]

    return randomOptions

}

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';


function playRound(playerSelection,computerSelection) {
    if(computerSelection === "paper" && playerSelection === "rock"){

        computerScore++;
        roundWinner = 'computer';
        return "You Lose! Paper beats Rock";
    }

    else if(computerSelection === "rock" && playerSelection === "scissors"){

        computerScore++;
        roundWinner = 'computer';
        return "You Lose! Rock beats scissors";
    }

    else if(computerSelection === "scissors" && playerSelection === "paper"){

        computerScore++;
        roundWinner = 'computer';
        return "You Lose! Scissors beats paper";
    }

    else if (computerSelection === "paper" && playerSelection === "scissors") {

        playerScore++;
        roundWinner = 'player';
        return "You Win! Scissors beats Paper";

    }

    else if(computerSelection === "rock" && playerSelection === "paper"){

        playerScore++;
        roundWinner = 'player';
        return "You Win! Paper beats rock";
    }

    else if(computerSelection === "scissors" && playerSelection === "rock"){

        playerScore++;
        roundWinner = 'player';
        return "You Win! Rock beats scissors";

    }

    else if (computerSelection === playerSelection) {

        roundWinner = 'tie';           
        return "A Draw!";
    }
}

function game() {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice().toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}, Round Winner: ${roundWinner}`);
}


game()

    
