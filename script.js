
function userInput() {
    const validInput = ["rock", "paper", "scissors"]
    let user; 
    while (!(validInput.includes(user))) {
        console.log('(Enter "0" to exit)');
        user = prompt("What's your choice").toLowerCase();
        if (user === "0"){
            return exit();
        }
    }  
    return user;
}

function computerPlay() {
    let randomNumber = Math.floor((Math.random()*3)+1);
    switch (randomNumber) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}

function playRound(playerSelection, computerselection) {
    if (playerSelection == computerselection) {
        console.log(`It's a tie! You both chose ${playerSelection}`);
        return 0
    }
    else {
        if (playerSelection == "rock") {
            if (computerselection == "scissors") {
                console.log("You Win! Rock beats Scissors");
                return 1;
            } else{
                console.log("You lose! Paper beats Rock");
                return 0;
            }
        }
        if (playerSelection == "paper") {
            if (computerselection == "rock") {
                console.log("You Win! Paper beats Rock");
                return 1;
            } else{
                console.log("You lose! Scissors beats Paper");
                return 0;
            }
        }
        if (playerSelection == "scissors") {
            if (computerselection == "paper") {
                console.log("You Win! Scissors beats Paper");
                return 1;
            } else{
                console.log("You lose! Rock beats Scissors");
                return 0;
            }
        }
    }
}

function game() {
    let total = 0;
    for (let i = 0; i < 5; i++) {
        let round = playRound(userInput(), computerPlay());
        total += round;
    }
    if (total > 2) {
        console.log(`Congrats! You beat the Computer by winning ${total} times in 5 rounds`);
    } else {
        console.log(`Better luck next time! You won only ${total} times in 5 rounds`);
    }
}
game()