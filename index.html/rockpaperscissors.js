//choices for RPS

const choices = ["rock", "paper", "scissors"];

//calling the game function will initiate RPS

function game() { 
    playRound();

    for (let i = 0; i < 5; i++) {

if (playerChoice === computerChoice) {
    console.log("It's a tie!");
} 
if (playerChoice == "rock" && computerChoice == "scissors") { 
    console.log("Player wins!");
    } else {
        console.log("Computer wins!");
    }
 
if (playerChoice == "paper" && computerChoice == "rock") {
    console.log("Player wins!");
    } else {
    console.log("Computer wins!");
}
if (playerChoice == "scissors" && computerChoice == "paper") {
    console.log("Player wins!");
    } else {
    console.log("Computer wins!");
}
}



    }


        // A round of rock, paper, scissors between the player and computer.

    function playRound() {
        const playerSelection = playerChoice();
        const computerSelection = computerChoice();
        }
        
    function playerChoice() {
        let input = prompt("Type Rock, Paper, or Scissors");
        while (input == null) {
            input = prompt("Type Rock, Paper, or Scissors");
        }
        
        input = input.toLowerCase();
        let check = validateInput(input)
        if (check == true) {
            console.log(input);
        }
        //console.log(input);
    }
        
    function computerChoice() {
        return choices[Math.floor(Math.random()*choices.length)];
    }

    function validateInput(choice) {
        if (choices.includes(choice)) {
            return true;
        } else {
            return false;
        }
        }
    
game();