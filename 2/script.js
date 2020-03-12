const button = document.querySelector('button');
const input = document.querySelector('input');
const output = document.querySelector('#output');

button.addEventListener('click', function() {
    if(input.value.length >= 1) {
        let el = `<h1>Welcome, ${input.value}</h1>`
        output.innerHTML = el;
    }

})