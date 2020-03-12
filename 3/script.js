
const button = document.querySelector('button');
const output = document.querySelector('#output');
let time = new Date().getHours();

button.addEventListener('click', function() {
    if(time >= 4 && time <= 12) {
        message = 'Good morning';
        output.style.backgroundColor = 'green';

    }
    else if (time > 12 && time < 17 ) {
        message = 'Good afternoon';
        output.style.backgroundColor = 'blue';
    } 
    else if ( time > 17 && time < 21) {
        message = 'Good evening';
        output.style.backgroundColor = 'purple';
    }
    else {
        message = 'Good night';
        output.style.backgroundColor = 'black';
    }
    output.innerHTML = `<h1>  ${message} </h1>`;

    })

