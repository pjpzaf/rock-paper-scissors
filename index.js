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
let rockClick = function(){
    playerChoice = "Rock";
    playerChoiceAnimation(playerChoice);
    singleRoundGame (playerChoice);
}
rockChoice.addEventListener('click', rockClick );

//player selects and clicks on paper
paperChoice = document.getElementById('paper');
let paperClick = function() {
    playerChoice = "Paper";
    playerChoiceAnimation(playerChoice);
    singleRoundGame (playerChoice);
    }
paperChoice.addEventListener('click', paperClick);

    //player selects and clicks on rock
scissorsChoice = document.getElementById('scissors');
let scissorsClick = function() {
    playerChoice = "Scissors";
    playerChoiceAnimation(playerChoice);
    singleRoundGame (playerChoice);
    }
scissorsChoice.addEventListener('click', scissorsClick);
    

//plays one round of the game
function singleRoundGame(playerChoice) {

    getComputerChoice();
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
        let playerScore = document.getElementById("human-score");
        playerScore.textContent = `Human: ${playerPoint}`;
    }
    else if (computerChoice==="Paper" && playerChoice==="Scissors"){
        playerPoint = ++playerPoint;
        let playerScore = document.getElementById("human-score");
        playerScore.textContent = `Human: ${playerPoint}`;
    }
    else if (computerChoice==="Scissors" && playerChoice==="Rock"){
        playerPoint = ++playerPoint;
        let playerScore = document.getElementById("human-score");
        playerScore.textContent = `Human: ${playerPoint}`;
    }
    // else if (computerChoice===playerChoice) {
    //     result = "Draw! Same choice for both players.";
    //     console.log(result);
    // }

        //when one side reaches five points     
        if (playerPoint===5 || computerPoint===5) {

            //removes event listener once a side is declared a victor of the match
            rockChoice.removeEventListener('click',rockClick);
            paperChoice.removeEventListener('click',paperClick);
            scissorsChoice.removeEventListener('click',scissorsClick);

        //setTimeout added to ensure choice for computer and player are shown before the alert is displayed
            setTimeout(function(){
                if (playerPoint>computerPoint) {
                alert("You won! You are superior than the mighty computer! Congratulations");
                }
                else {
                alert("You lost! Please bow down to your computer overlord, or die!");
                }
                
                //creates button to refresh page
                selectBody = document.querySelector('body');
                let resetGame = document.createElement('button');
                let buttonText = document.createTextNode("Play Again?");
                resetGame.style.width = "auto";
                resetGame.style.alignSelf = "center";
                resetGame.style.fontSize = "50px";
                resetGame.style.fontFamily = "'Press Start 2P'";
                resetGame.style.color = "antiquewhite";
                resetGame.style.borderRadius = "10px";
                resetGame.style.borderWidth = "15px";
                resetGame.style.borderColor = "#060c25";
                resetGame.style.backgroundColor = "#060c25";
                resetGame.appendChild(buttonText);
                selectBody.appendChild(resetGame);

                resetGame.addEventListener('click', function () {
                    location.reload()
                });

            },500);

        }


    }





