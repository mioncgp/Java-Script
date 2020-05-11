// Select elements
const form = document.querySelector("#task-form");
const formInput = document.querySelector("#task");
const ul = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", getTasks);
    form.addEventListener("submit", addTask);
    ul.addEventListener("click", removeTask);
    clearBtn.addEventListener("click", clearTasks);
    filter.addEventListener("keyup", filterTask);
}

function getTasks() {
    let tasks;
    if(localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task) {
         // create li
    const li = document.createElement("li");
    // assing a class
    li.className = "collection-item";
    // add text from the input
    li.appendChild(document.createTextNode(task));
    // create a tag
    const link = document.createElement("a");
    // assingn class to a link
    link.classList = 'delete-item secondary-content';
    // append element inside the links
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link to li
    li.appendChild(link);
    // append lis to the ul
    ul.appendChild(li)
    })
}

function addTask(e) {
    if(formInput.value === '') {
        alert("Type something");
    }

    // create li
    const li = document.createElement("li");
    // assing a class
    li.className = "collection-item";
    // add text from the input
    li.appendChild(document.createTextNode(formInput.value));
    // create a tag
    const link = document.createElement("a");
    // assingn class to a link
    link.classList = 'delete-item secondary-content';
    // append element inside the links
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link to li
    li.appendChild(link);
    // append lis to the ul
    ul.appendChild(li)
    // local storage
    saveTaskToLocalStorage(formInput.value);
    // clear input
    formInput.value = '';
    e.preventDefault();
}

function saveTaskToLocalStorage(task) {
    let tasks;
    if(localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm("Are you sure?")) {
            e.target.parentElement.parentElement.remove();
        }
    }
    removeFromLocalStorage(e.target.parentElement.parentElement);
}

function removeFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index) {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks(e) {
     while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
     }
     clearsTasksFromLocalStorage();
}

function clearsTasksFromLocalStorage() {
    localStorage.clear();
}

function filterTask(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    })
}