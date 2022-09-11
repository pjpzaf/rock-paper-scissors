//variable declaration
let computerChoice;
let playerChoice;
let gameSelection = ["Rock","Paper","Scissors"];
let result;
let playerPoint = 0;
let computerPoint = 0;

//function that generates computer choice
function getComputerChoice () {
let computerChoiceIndex = Math.floor(Math.random()*3);
return computerChoice = gameSelection[computerChoiceIndex];
}

//accepts user choice
playerChoice = prompt("Rock, Paper, or Scissors? ;)", "Rock");
let firstLetter = playerChoice.charAt(0).toUpperCase();
let remainingLetters = playerChoice.slice(1).toLowerCase();
playerChoice = firstLetter + remainingLetters;

//invokes function to return computer choice
getComputerChoice();

//function to play a single game
function singleRoundGame (computerChoice,playerChoice) {

    //computer wins
    if (playerChoice=="Rock" && computerChoice=="Paper") {
        result = "You lose! Rock loses to Paper :P";
        console.log(result);
        computerPoint = ++computerPoint;
    }
    else if (playerChoice=="Paper" && computerChoice=="Scissors"){
        result = "You lose! Paper loses to Scissors :P";
        console.log(result);
        computerPoint = ++computerPoint;
    }
    else if (playerChoice=="Scissors" && computerChoice=="Rock"){
        result = "You lose! Rock loses to Scissors :P";
        console.log(result);
        computerPoint = ++computerPoint;
    }

    //player wins
    else if (computerChoice=="Rock" && playerChoice=="Paper") {
        result = "You win! Rock loses to Paper :'(";
        console.log(result);
        playerPoint = ++playerPoint;
    }
    else if (computerChoice=="Paper" && playerChoice=="Scissors"){
        result = "You win! Paper loses to Scissors :'(";
        console.log(result);
        playerPoint = ++playerPoint;
    }
    else if (computerChoice=="Scissors" && playerChoice=="Rock"){
        result = "You win! Rock loses to Scissors :'(";
        console.log(result);
        playerPoint = ++playerPoint;
    }
    else {
        result = "Draw! Same choice for both players."
    }
    
}

singleRoundGame (computerChoice,playerChoice)