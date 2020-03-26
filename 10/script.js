// there is a container
// press button and it add them to an array
//buttons from the array displayed on the top of the container
// block hello world moves accorngly to the array of buttons
const container = document.querySelector('.container');
const box = document.querySelector('#box');

container.addEventListener('click', function(e) {
    console.log(e);
})