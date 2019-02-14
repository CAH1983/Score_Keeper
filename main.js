const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

let p1Score = 0; 
let p2Score = 0; 

let gameOver = false;
const winningScore = 5;

p1Button.addEventListener('click', function() {
    if('gameOver') {
        p1Score++;
        if(p1Score === winningScore) {
            console.log('Game over');
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
    console.log(p1Score);
    p1Display.textContent = p1Score;
});

p2Button.addEventListener('click', function() {
    console.log('P2 button clicked');
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            gameOver = true;
        }
    }
    p2Score++;
    p2Display.textContent = p2Score;
})