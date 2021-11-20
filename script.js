/*
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
*/

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
        return `It's a tie! You both chose ${playerSelection}`;
    }
    else {
        if (playerSelection == "rock") {
            if (computerselection == "scissors") {
                return "You Win! Rock beats Scissors";
            } else{
                return "You lose! Paper beats Rock";
            }
        }
        if (playerSelection == "paper") {
            if (computerselection == "rock") {
                return "You Win! Paper beats Rock";
            } else{
                return "You lose! Scissors beats Paper";
            }
        }
        if (playerSelection == "scissors") {
            if (computerselection == "paper") {
                return "You Win! Scissors beats Paper";
            } else{
                return "You lose! Rock beats Scissors";
            }
        }
    }
}
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click" , () => {
        const container = document.querySelector(".container");
        const result = document.createElement("div");
        result.classList.add("result");
        result.textContent = playRound(button.id, computerPlay());
        container.appendChild(result);
    })
});