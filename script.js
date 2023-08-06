
function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3 + 1)
    if (randomNum === 1) {
        return "Rock";

    } else if (randomNum === 2) {
        return "Paper";

    } else if (randomNum === 3){
        return "Scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection === computerSelection){
        return "It's a draw!";

    } else if (playerSelection === "ROCK"){
        if (computerSelection === "PAPER"){
            return "You Lost!";
        }
        else{
            return "You Won!";
        }

    } else if (playerSelection === "PAPER"){
        if(computerSelection === "ROCK"){
            return "You Won!";
        }else{
            return "You Lost!";
        }

    } else if (playerSelection === "SCISSORS"){
        if(computerSelection === "ROCK"){
            return "You Lost!";
        }else{
            return "You Won!";
        }
    }
}
/*function Game(){
    let count = 0;
    let playerScore = 0;
    let computerScore = 0;
    while(count < 5){
        let playerSelection = window.prompt("Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();
        if (playRound(playerSelection, computerSelection) === "You Won!"){
            console.log("Player WINS Round");
            playerScore++;
        }else if (playRound(playerSelection, computerSelection) === "You Lost!"){
            console.log("Computer WINS Round");
            computerScore++;
        }else if(playRound(playerSelection, computerSelection) === "It's a draw!"){
            console.log("This Round is a DRAW. No Points Awarded");
        }else {
            console.log("Please Make Sure to Spell Correctly");
            count--;
        }
        count++
    }
    if (playerScore === computerScore){
        console.log("It's a DRAW");
    }else if (playerScore > computerScore){
        console.log("Player WINS Game");
    }else if (playerScore < computerScore){
        console.log("Computer WINS Game");
    }
}
*/
let pScore = 0;
let compScore = 0;

const btns = document.querySelectorAll('button');
console.log(btns);
btns.forEach((btn) => {
    btn.addEventListener('click' , () =>{
        const choice = btn.textContent;
        let roundResult = playRound(choice, getComputerChoice());
        if (roundResult === 'You Won!'){
            pScore++;
            document.querySelector('label.pScore').textContent = pScore;
        } else if (roundResult === 'You Lost!'){
            compScore ++;
            document.querySelector('label.compScore').textContent = compScore;
        }
    })
})