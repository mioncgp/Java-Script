const output = document.querySelector('#output');
const button = document.querySelector('button');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const dice = [[5],[1,9],[1,5,9],[1,3,7,9],[1,3,5,7,9],[1,3,4,6,7,9]]


button.addEventListener('click', function() {
    let rolls = [roll(6), roll(6)];
    let temp;
    if(rolls[0] === rolls[1]) {
        temp = 'Draw';
    }
    else if(rolls[0] > rolls[1]) {
        temp = 'Player 1 wins!';
    }
    else {
        temp = 'Player 2 wins!';
    }
    
    
    updateOutput(player1, rolls[0]);
    updateOutput(player2, rolls[1]);
    output.innerHTML = temp;

    function updateOutput(element, number) {
        let holder = builder(number);
        if(element.children[0]) {
            element.children[0].remove();
        }
        element.appendChild(holder);

    }


    function builder(num) {
        let div = document.createElement('div');
        let dieArray = dice[num-1];
        for(let x = 1; x < 10; x++) {
            let dotDiv = document.createElement('div');
            dotDiv.setAttribute('class', 'dot');
            if(dieArray.includes(x)) {
                dotDiv.classList.add('black')
            }

            div.appendChild(dotDiv);
        }
        div.setAttribute('class', 'dicer');
        return div;
    }

    function roll(num) {
        let number = Math.floor(Math.random() * num) +1;
        return number;
    }
})
