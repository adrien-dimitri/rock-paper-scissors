
let input = prompt("What's your choice")
let user = input.toLowerCase()

let randomNumber = Math.floor((Math.random()*3)+1);
let COM;
switch (randomNumber) {
    case 1:
        COM = "rock"
        break;
    case 2:
        COM = "paper"
        break;
    case 3:
        COM = "scissors"
        break;

}
console.log(`User chose "${user}" and COM chose "${COM}"`)

if (user == COM) {
    console.log("It is a tie!")
}
else {
    if (user == "rock") {
        if (COM == "scissors") {
            console.log("User wins!")
        } else{
            console.log("COM wins!")
        }
    }
    if (user == "scissors") {
        if (COM == "paper") {
            console.log("User wins!")
        } else{
            console.log("COM wins!")
        }
    }
    if (user == "paper") {
        if (COM == "rock") {
            console.log("User wins!")
        } else{
            console.log("COM wins!")
        }   
    }
}