const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#resetButton");
const numInput = document.querySelector("input");
const p = document.querySelector("p");
const updateBtn = document.querySelector("#update");
let winningScoreDisplay = document.querySelector("p span");

let p1Score = 0; 
let p2Score = 0; 

let gameOver = false; 
let winningScore = 5;
 

// when score of Player 1 is clicked, score increases, and once the player reaches 5, the number turns green.
p1Button.addEventListener('click', function() {
    if(!gameOver) {
        p1Score++;
        if(p1Score === winningScore) {
            console.log('Game over');
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
    console.log(p1Score);
    p1Display.textContent = p1Score;
});


// same function as for Player1 button 

p2Button.addEventListener('click', function() {
    console.log('P2 button clicked');
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
    }
    p2Display.textContent = p2Score;
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}


resetButton.addEventListener('click', function() {
    reset();
});

updateBtn.addEventListener('click', function() {
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value); //turn numInput value into a string so the conditional statement with ==== will work
    reset();
})