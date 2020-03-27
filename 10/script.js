let myBlock;
let arrayOfCommands = [];
let arrayRandom = ['right', 'left', 'up', 'down'];
document.addEventListener('DOMContentLoaded', function() {
    myBlock = document.createElement('div');
    myBlock.textContent = "hello world";
    myBlock.style.width = "100px";
    myBlock.style.height = "100px";
    myBlock.style.backgroundColor = "red";
    myBlock.style.color = "white";
    myBlock.style.lineHeight = "100px";
    myBlock.style.textAlign = "center";
    myBlock.style.position = "absolute";
    myBlock.style.top = "100px";
    myBlock.style.left = "100px";
    document.body.appendChild(myBlock);
    myList = document.createElement('div');
    document.body.appendChild(myList);
})

document.addEventListener("keydown", function(e) {
    e.preventDefault();
    let keyC = e.keyCode;
    if(keyC === 37) {
        addCommands('left');
    } else if (keyC === 39) {
        addCommands('right');
    } else if (keyC === 38) {
        addCommands('up');
    } else if (keyC === 40) {
        addCommands('down');
    } else if (keyC === 67) {
        myBlock.style.backgroundColor = randomColor();
    } else if (keyC === 13 || keyC === 32) {
        mover();
    } else if (keyC === 82) {
        let temp = arrayRandom[Math.floor(Math.random() * arrayRandom.length)];
        addCommands(temp);
    }
})

function mover() {
    if(arrayOfCommands.length > 0) {
        let cur = myBlock.getBoundingClientRect();
        let el = arrayOfCommands.shift();
        let item = el.textContent.replace("+", "");
        myList.removeChild(el);
        myBlock.innerHTML = 'Move ' + item;
        if (item === 'left') {
            myBlock.style.left = cur.left - cur.width + "px";
        }
        if (item === 'right') {
            myBlock.style.left = cur.left + cur.width + "px";
        }
        if (item === 'up') {
            myBlock.style.top = cur.top - cur.height + "px";
        }
        if (item === 'down') {
            myBlock.style.top = cur.top + cur.height + "px";
        }
        setTimeout(mover, 300);
        }  else {
            myBlock.innerHTML = "Set Path";
            return;
        } 
}

function addCommands(command) {
    let span = document.createElement("span");
    span.textContent = "+" + command;
    span.style.padding = "10px";
    span.style.border = "1px solid #ddd";
    myList.appendChild(span);;
    span.addEventListener("mouseover", function() {
        this.style.backgroundColor = "red";
        this.style.color = "white";
    })
    span.addEventListener("mouseout", function() {
        this.style.background = "white";
        this.style.color = "black";
    })
    span.addEventListener('click', function() {
        let currentIndex = arrayOfCommands.indexOf(this);
        let tempRemove = arrayOfCommands.splice(currentIndex, 1);
        myList.removeChild(this);
    })
    arrayOfCommands.push(span);
}

function randomColor() {
    return '#' + Math.random().toString(16).substr(-6);
}


