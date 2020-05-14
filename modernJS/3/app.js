// UI variables
const numberMin = document.querySelector('.min-num'),
      numberMax = document.querySelector('.max-num'),
      message = document.querySelector('.message'),
      submitBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      gameWrapper = document.querySelector('#game');

// Game variables
let min = 10,
    max = 15,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// Make min and max dynamic
numberMin.textContent = min;
numberMax.textContent = max;

// Game again 
gameWrapper.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
})

// Listen for the input
submitBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    // Validate the input
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    } else {
        // Check if won
        if(guess === winningNum) {
            gameOver(true, `${winningNum} is correct, You Win`);
        } else {
            // guess was wrong deduct from guesses
            guessesLeft--;
            if(guessesLeft === 0) {
                gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
            } else {
                // Change color border
                guessInput.style.borderColor = 'red';
                // Clear Input
                guessInput.value = '';
                // Notify user about the wrong num
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
            }
        }
    }
})

// Game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    // Change color
    guessInput.style.borderColor = color;
    // Text color
    message.style.color = color;
    // Set Message
    setMessage(msg);
    // Play
    submitBtn.value = 'Play Again';
    submitBtn.className = 'play-again';
}

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

// Get random num 
function getRandomNum(min, max) {
    console.log(Math.floor(Math.random() * (max - min +1) + min));
    return Math.floor(Math.random() * (max - min +1) + min);
}
