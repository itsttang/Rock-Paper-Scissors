//Choices for RPS

const choices = ["rock", "paper", "scissors"];

//Random between rock, paper, or scissors
function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

//User input
function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    
    input = input.toLowerCase();
        console.log(input);
    
    return input;
}

function game() { 
    for (let i = 0; i < 5; i++) {
        playRound(playerChoice,computerChoice);
}
}
    
    let playerScore = parseInt(0);
    let computerScore = parseInt(0);

        // A round of rock, paper, scissors between the player and computer.

    function playRound() {
        const playerSelection = playerChoice();
        const computerSelection = computerChoice();
        const winner = checkWinner(playerSelection,computerSelection);
        console.log(winner);
        }

    function checkWinner(playerChoice,computerChoice) {
        if (playerChoice === computerChoice) {
            console.log("Player score: " + playerScore)
            console.log("Computer score: " + computerScore)
            return "Tie";
        } else if (
            playerChoice === "rock" && computerChoice === "scissors" || 
            playerChoice === "paper" && computerChoice === "scissors" ||
            playerChoice === "scissors" && computerChoice === "paper"
        ) {
            playerScore++;
            console.log("Player score: " + playerScore)
            console.log("Computer score: " + computerScore)
            return "Player wins";
        } else {
            computerScore++;
            console.log("Player score: " + playerScore)
            console.log("Computer score: " + computerScore)
            return "Computer wins";
        }}
        
game();
