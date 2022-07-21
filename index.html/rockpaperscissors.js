//Choices for RPS

const choices = ["rock", "paper", "scissors"];

//Random between rock, paper, or scissors
function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

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
            return "Tie";
        } else if (
            playerChoice === "rock" && computerChoice === "scissors" || 
            playerChoice === "paper" && computerChoice === "scissors" ||
            playerChoice === "scissors" && computerChoice === "paper"
        ) {
            return "Player wins";
        } else {
            return "Computer wins";
        }}
        
game();
