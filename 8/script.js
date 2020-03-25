const myArray = ['lion', 'cougar', 'bark'];
document.addEventListener('DOMContentLoaded', init);

function init() {
    myArray.forEach(function(item) {
        let div = document.createElement('div');
        div.setAttribute('class', 'animal ' + item);
        div.innerText = item.toUpperCase();
        document.body.appendChild(div);
        div.addEventListener('click', function() {
            playIt(item);
        })
        // document.body.appendChild(div);
    })
}



function playIt(name) {
    let activeEl = document.querySelector('.'+name);
    console.log(activeEl);
    let sound1 = new Audio('sound/'+name+'.mp3');
    sound1.play();
    activeEl.classList.add('active');

    setTimeout(function() {
        activeEl.classList.remove('active')
    }, 200)
}

