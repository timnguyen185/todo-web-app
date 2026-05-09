//Get HTML elements
const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

//Load tasks from localStorage or initialize an empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to create a list item for a task
function createTaskListItem(task) {
    const li = document.createElement("li");
    li.textContent = task;

    // Clicking a task will mark it as completed (line-through)
    li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
    });

    return li;
}

// Function to render tasks on the page
function renderTasks() {
    // Clear the current list before rendering
    list.innerHTML = "";

    // Loop through tasks and create list items
    tasks.forEach((task) => {
        list.appendChild(createTaskListItem(task));
    });
}

// Event listener for the Add Task button
button.addEventListener("click", function () {
    const taskText = input.value.trim();

    if (taskText === "") return;

    // Save the task to localStorage
    tasks.push(taskText);
    saveTasks();

    renderTasks();

    input.value = "";
});

// Initial render of tasks from localStorage
renderTasks();


