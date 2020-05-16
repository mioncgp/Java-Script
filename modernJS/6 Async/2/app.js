document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create an XHR object
    const xhr = new XMLHttpRequest();

    // Configurate the request
    xhr.open('GET', 'data.txt', true);

    // Spinner or loaders
    xhr.onprogress = function() {
        console.log(xhr.readyState);
    }

    //  the function called when an XMLHttpRequest transaction completes successfully
    xhr.onload = function() {
        if(this.status === 200) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }
    // if something goes wrong
    xhr.onerror = function() {
        console.log('Request error...');
    }
    // Send
    xhr.send();

    // stages:
    // 0 = request not initialized
    // 1 = server connection established
    // 2 = request receieved
    // 3 = processing request
    // 4 = request finished and response is ready
}