// Get HTML elements
const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// Create and add Clear All button
const clearAllBtn = document.createElement("button");
clearAllBtn.textContent = "Clear All";
clearAllBtn.id = "clearAllBtn";
button.insertAdjacentElement("afterend", clearAllBtn);

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render tasks on screen
function renderTasks() {
    // Clear current list
    list.innerHTML = "";

    // Loop through tasks
    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        // Show task text
        li.textContent = task.text;

        // If completed, add strike-through
        if (task.completed) {
            li.style.textDecoration = "line-through";
        }

        // Toggle completion when clicked
        li.addEventListener("click", function () {
            task.completed = !task.completed;

            saveTasks();
            renderTasks();
        });

        // Create edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        editBtn.addEventListener("click", function (event) {
            event.stopPropagation();

            // Prompt user for new task text
            const updatedText = prompt("Update task:", task.text);
            if (updatedText === null) return;

            // Trim whitespace and check if empty
            const trimmedText = updatedText.trim();
            if (trimmedText === "") return;

            task.text = trimmedText;
            saveTasks();
            renderTasks();
        });

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        // Delete task when button clicked
        deleteBtn.addEventListener("click", function (event) {
            event.stopPropagation();

            tasks.splice(index, 1);

            saveTasks();
            renderTasks();
        });

        // Add edit and delete buttons to task
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        // Add task to list
        list.appendChild(li);
    });
}

// Add new task button click event
button.addEventListener("click", function () {
    const taskText = input.value.trim();

    if (taskText === "") return;

    // Create task object
    const newTask = {
        text: taskText,
        completed: false
    };

    // Add to array
    tasks.push(newTask);

    // Save and re-render
    saveTasks();
    renderTasks();

    // Clear input
    input.value = "";
});

// Clear All button click event
clearAllBtn.addEventListener("click", function () {
    tasks = [];
    saveTasks();
    renderTasks();
});

// Initial render
renderTasks();