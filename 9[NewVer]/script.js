const message = document.querySelector('.message');
const textArea = document.querySelector('#ta');
const button = document.querySelector('button');
const arrayPhrases = ["Hey bruda don't worry", "life sucks mostly", "but it is what it is", "It's gonna be okay don't fear", "I love programming"];
let startTime, endTime;

button.addEventListener('click', function() {
        if(this.innerText === 'Start') {
            playGame();
        }
        else if (this.innerText === 'Done') {
            endGame();
            textArea.value = '';
        }
})

function playGame() {
    button.innerText = 'Done';
    textArea.disabled = false;
    startTime = getDate();
    let phrase = randomPhrase(arrayPhrases);
    message.innerHTML = phrase;
}

function endGame() {
    button.innerHTML = 'Start';
    textArea.disabled = true;
    endTime = getDate();
    calculateSpeed()
}

function getDate() {
    let date = new Date();
    let getTime = date.getTime(); 
    return getTime
}

function calculateSpeed() {
    let totalTime = (endTime - startTime) / 1000;
    let getWords = textArea.value.split(' ').length;
    let speed = Math.floor((totalTime / getWords) * 60);
    let finalMessage = `You typed ${speed} per minute`;
    let mistakeFinder = findMistakes();
    message.innerHTML = finalMessage + mistakeFinder;

}

function findMistakes() {
    let words1 = message.innerText.split(' ');
    let words2 = textArea.value.split(' ');
    let count = 0;
    words1.forEach(function(word, index) {
        if(word === words2[index]) {
            count++;
        }
    })
    return `<br> ${count} correct out of ${words1.length}`;
}

function randomPhrase(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    let oneRandomPhrase = arrayPhrases[randomNumber];
    return oneRandomPhrase;
}

function getDate() {
    let date = new Date();
    let getTime = date.getTime(); 
    return getTime
}

