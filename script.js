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

let playerScore = 0;
let comScore = 0;

function playRound(playerSelection, computerselection) {
    while (playerScore  < 5 && comScore < 5) {
        if (playerSelection == computerselection) {
            return `It's a tie! You both chose ${playerSelection}. Score is ${playerScore}:${comScore}`;
        }
        else {
            if (playerSelection == "rock") {
                if (computerselection == "scissors") {
                    playerScore += 1;
                    return `You Win! Rock beats Scissors. Score is ${playerScore}:${comScore}`;
                } else{
                    comScore += 1;
                    return `You lose! Paper beats Rock. Score is ${playerScore}:${comScore}`;
                }
            }
            if (playerSelection == "paper") {
                if (computerselection == "rock") {
                    playerScore += 1;
                    return `You Win! Paper beats Rock. Score is ${playerScore}:${comScore}`;
                } else{
                    comScore += 1;
                    return `You lose! Scissors beats Paper. Score is ${playerScore}:${comScore}`;
                }
            }
            if (playerSelection == "scissors") {
                if (computerselection == "paper") {
                    playerScore += 1;
                    return `You Win! Scissors beats Paper. Score is ${playerScore}:${comScore}`;
                } else{
                    comScore += 1;
                    return `You lose! Rock beats Scissors. Score is ${playerScore}:${comScore}`;
                }
            }
        }
    }
    if (playerScore == 5) return `You won the match ${playerScore}:${comScore}!`
    else return `You lost the match ${playerScore}:${comScore}. Better luck next time :)`
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