//variable declaration
let computerChoice;
let playerChoice;
let gameSelection = ["Rock","Paper","Scissors"];
let result;
let playerPoint = 0;
let computerPoint = 0;
let containerComputer;
let prevComputerChoiceVal;
let computerChoiceVal;
let containerPlayer;
let prevPlayerChoiceVal;
let playerChoiceVal;
let rockChoice;
let paperChoice;
let scissorsChoice;

const sampleChoice = document.getElementById('rock');

//function that generates computer choice
function getComputerChoice () {
    let computerChoiceIndex = Math.floor(Math.random()*3);


    if (computerChoiceIndex===0) {
        computerChoice = gameSelection[computerChoiceIndex]; //stores the selection of the computer
        //gives slight animation changes in webpage
        computerChoiceAnimation(computerChoice);
        }
    else if (computerChoiceIndex===1) {
        computerChoice = gameSelection[computerChoiceIndex]; //stores the selection of the computer
        //gives slight animation changes in webpage
        computerChoiceAnimation(computerChoice);
        }
    else if (computerChoiceIndex===2) {
        computerChoice = gameSelection[computerChoiceIndex]; //stores the selection of the computer
        //gives slight animation changes in webpage
        computerChoiceAnimation(computerChoice);
        }
    return computerChoice;
}

//function to change image of computer choice 
function computerChoiceAnimation (computerChoice) {
    let computerChoiceText = computerChoice.toLowerCase()
    containerComputer = document.getElementById('container-computer');
    prevComputerChoiceVal = document.getElementById('computer-choice');
    computerChoiceVal = document.createElement("img");
    computerChoiceVal.src = `${computerChoiceText}.svg`;
    containerComputer.replaceChild(computerChoiceVal, prevComputerChoiceVal);
    computerChoiceVal.id = 'computer-choice';
}

//function to change image of computer choice 
function playerChoiceAnimation (playerChoice) {
    let playerChoiceText = playerChoice.toLowerCase()
    containerPlayer = document.getElementById('container-human');
    prevPlayerChoiceVal = document.getElementById('human-choice');
    playerChoiceVal = document.createElement("img");
    playerChoiceVal.src = `${playerChoiceText}.svg`;
    containerPlayer.replaceChild(playerChoiceVal, prevPlayerChoiceVal);
    playerChoiceVal.id = 'human-choice';
}

//player selects and clicks on rock
rockChoice = document.getElementById('rock');
rockChoice.addEventListener('click', function() {
    playerChoice = "Rock";
    playerChoiceAnimation(playerChoice);
    getComputerChoice();
    singleRoundGame (computerChoice,playerChoice);
})

//player selects and clicks on paper
paperChoice = document.getElementById('paper');
paperChoice.addEventListener('click', function() {
    playerChoice = "Paper";
    playerChoiceAnimation(playerChoice);
    getComputerChoice();
    singleRoundGame (computerChoice,playerChoice);
    })

    //player selects and clicks on rock
scissorsChoice = document.getElementById('scissors');
scissorsChoice.addEventListener('click', function() {
    playerChoice = "Scissors";
    playerChoiceAnimation(playerChoice);
    getComputerChoice();
    singleRoundGame (computerChoice,playerChoice);
    })
    





//plays one round of the game
function singleRoundGame() {
    //computer wins
    if (playerChoice==="Rock" && computerChoice==="Paper") {
        computerPoint = ++computerPoint;
        let computerScore = document.getElementById("computer-score");
        computerScore.textContent = `Computer: ${computerPoint}`;
    }
    else if (playerChoice==="Paper" && computerChoice==="Scissors"){
        computerPoint = ++computerPoint;
        let computerScore = document.getElementById("computer-score");
        computerScore.textContent = `Computer: ${computerPoint}`;
    }
    else if (playerChoice==="Scissors" && computerChoice==="Rock"){
        computerPoint = ++computerPoint;
        let computerScore = document.getElementById("computer-score");
        computerScore.textContent = `Computer: ${computerPoint}`;
    }

    //player wins
    else if (computerChoice==="Rock" && playerChoice==="Paper") {
        playerPoint = ++playerPoint;
        let computerScore = document.getElementById("human-score");
        computerScore.textContent = `Human: ${playerPoint}`;
    }
    else if (computerChoice==="Paper" && playerChoice==="Scissors"){
        playerPoint = ++playerPoint;
        let computerScore = document.getElementById("human-score");
        computerScore.textContent = `Human: ${playerPoint}`;
    }
    else if (computerChoice==="Scissors" && playerChoice==="Rock"){
        playerPoint = ++playerPoint;
        let computerScore = document.getElementById("human-score");
        computerScore.textContent = `Human: ${playerPoint}`;
    }
    else if (computerChoice===playerChoice) {
        result = "Draw! Same choice for both players.";
        console.log(result);
    }
    return result;
}




