// Select elements
const form = document.querySelector("#task-form");
const formInput = document.querySelector("#task");
const ul = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

eventListeners();

function eventListeners() {
    // add a task
    form.addEventListener('submit', addTask);
    // Remove a task 
    ul.addEventListener('click', removeTask);
    // Remove all itmes
    clearBtn.addEventListener('click', clearTasks);
    //Filter through the tasks
    filter.addEventListener('keyup', filterTasks);
    // Display Tasks when dom is loaded
    document.addEventListener("DOMContentLoaded", getTasks);
}

// Adding a task
function addTask(e) {
    if(formInput.value === '') {
        alert("Type somthing here")
    }
    // create li element
    const li = document.createElement('li');
    // append a class to li
    li.className = "collection-item";
    // append text to the lis from the input
    li.appendChild(document.createTextNode(formInput.value));
    // create a tag
    const link = document.createElement('a');
    // append classes to the a tags
    link.classList = 'delete-item secondary-content';
    // append delete button to a tags
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append a tags to li
    li.appendChild(link);
    // append li to ul
    ul.appendChild(li);
    // Save item to LS
    saveTaskToLocalStorage(formInput.value);
    // append li to ul
    // clear input
    formInput.value = '';
    e.preventDefault();
}

// Display tasks
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task) {
        // create li element
        const li = document.createElement('li');
        // append a class to li
        li.className = "collection-item";
        // append text to the lis from the input
        li.appendChild(document.createTextNode(task));
        // create a tag
        const link = document.createElement('a');
        // append classes to the a tags
        link.classList = 'delete-item secondary-content';
        // append delete button to a tags
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // append a tags to li
        li.appendChild(link);
        // append li to ul
        ul.appendChild(li);
    })
}

// task to LS
function saveTaskToLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task function
function removeTask(e) {
    if(e.target.parentElement.parentElement.className === 'collection-item') {
        e.target.parentElement.parentElement.remove();
    }
    revomeTaskFromLocalSstorage(e.target.parentElement.parentElement.textContent);
}

// remove an itam from the Task List
function revomeTaskFromLocalSstorage(elementText) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index) {
        if(task === elementText) {
            tasks.splice(index, 1);
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear All tasks
function clearTasks(e) {
    while(ul.firstChild) {
        ul.firstChild.remove();
    }
    // also clear tasks from LS
    localStorage.clear()
}

// Filter Tasks
function filterTasks(e) {
    const textInput = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.textContent.toLowerCase();
        if(item.indexOf(textInput) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}