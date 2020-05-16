const btn = document.querySelector('#get-joke');
const output = document.querySelector('#output');
const input = document.querySelector("#input");

btn.addEventListener('click', loadJoke);


function loadJoke(e) {

    const numberOf = parseInt(input.value);

    if(numberOf < 1) {
        alert("Number must be more than 0");
    } else {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', `http://api.icndb.com/jokes/random/${numberOf}`, true);
    
        xhr.onload = function() {
            if(this.status === 200) {
                const jokesObj = JSON.parse(this.responseText);

                let stringOutput = '';
    
                jokesObj.value.forEach(function(joke, index) {
                    stringOutput += `<h4>${index +1}. ${joke.joke}</h4>`
                })
                
                output.innerHTML =  stringOutput;
            }
        }
    
        xhr.send();
    }
}