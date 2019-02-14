const p1Button = document.querySelector("#p1Button");
const p2Button = document.getElementById("#p2Button");
const p1Display = document.querySelector("#p1Display");

let p1Score = 0; 

p1Button.addEventListener('click', function() {
    p1Score++;
    console.log(p1Score);
    p1Display.textContent = p1Score;
})