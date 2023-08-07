
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

let pScore = 0;
let compScore = 0;
const btns = document.querySelectorAll('button'); //Selects rock, paper, and scissors buttons
const endResult = document.querySelector('.end-result');
const roundResult = document.querySelector('#results .round-result');

function resetGame(){
    pScore = 0;
    compScore = 0;
    document.querySelector('label.pScore').textContent = pScore;
    document.querySelector('label.compScore').textContent = compScore;
    endResult.replaceChildren();
    roundResult.replaceChildren();

}
function resetButton(){
    const resetBtn = document.createElement('button');
    resetBtn.textContent = "Reset";
    const resetContainer = document.querySelector('.reset');
    resetContainer.appendChild(resetBtn);
    resetBtn.addEventListener('click', () => {
        resetGame();
        resetContainer.removeChild(resetBtn);
        btns.forEach((btn)=> {btn.disabled = false;})
    });



}
btns.forEach((btn) => {
    btn.addEventListener('click' , () =>{
        const pChoice = btn.textContent;
        const compChoice = getComputerChoice();
        const resultContainer = document.querySelector("#results");
        let round = playRound(pChoice, compChoice);

        if (round === 'You Won!'){
            pScore++;
            document.querySelector('label.pScore').textContent = pScore;
            roundResult.textContent =`Player wins round! ${pChoice} beats ${compChoice}`
        } else if (round === 'You Lost!'){
            compScore ++;
            document.querySelector('label.compScore').textContent = compScore;
            roundResult.textContent = `Computer wins round! ${compChoice} beats ${pChoice}`;
        } else {
            roundResult.textContent = "This round is a draw!";
        }

        if (pScore === 5){
            endResult.textContent = "Player wins game!"
            resultContainer.appendChild(endResult);
            btns.forEach((btn) => {btn.disabled = true;});
            resetButton();
        } else if (compScore === 5){
            endResult.textContent = "Computer wins game!"
            resultContainer.appendChild(endResult);
            btns.forEach((btn) => {btn.disabled = true;});
            resetButton();
        }

    })
})

