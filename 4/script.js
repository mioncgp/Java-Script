const output = document.querySelector('#output');
const buttons = document.querySelectorAll('button');
const gameArray = ['Heads', 'Tails'];
const score = [0, 0];

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', coinToss)
}

function coinToss(e) {
    let playerTurn = e.target.innerText;
    let ai = gameArray[Math.floor(Math.random() * 2)];
    let message;
    if(playerTurn === ai) {
        message = 'Player wins!';
        score[0]++;
    }
    else {
        message = 'Computer wins!';
        score[1]++;
    }
    output.innerHTML = `Computer selected: ${ai}.<br>${message}<br>Player: ${score[0]} | Computer: ${score[1]}`;
}