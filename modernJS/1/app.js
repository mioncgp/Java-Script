// Grab items from the 
// Form
const form = document.querySelector("#task-form");
// Input 
const input = document.querySelector("#task");
//  Button
const button = document.querySelector(".btn");
// ul
const taskList = document.querySelector(".collection");
// clear tasks
const clearBtn = document.querySelector(".clear-tasks");
// filter
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners()

function loadEventListeners() {
    form.addEventListener("submit", addTask);
}

function addTask(e) {
    if(input.value === '') {
        alert('1')
    }
        // create li
    const li = document.createElement("li");
    // create class in li element
    li.className = "collection-item";
    // add text fro the input to li's
    li.appendChild(document.createTextNode(input.value));
    // create link
    const link = document.createElement('a');
    // add class to the a tags
    link.className = 'delete-item secondary-content';
    // add delete button to the a tags
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append the link to li
    li.appendChild(link);

    taskList.appendChild(li);

    e.preventDefault();
}


