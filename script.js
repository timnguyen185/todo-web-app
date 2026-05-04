let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        li.addEventListener("click", function () {
            li.style.textDecoration = "line-through";
        });

        list.appendChild(li);
    });
}

const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", function () {
    const taskText = input.value;

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Add functionality to remove tasks when clicked
    li.addEventListener("click", function () {
        li.remove();
    });
    list.appendChild(li);

    // Save the task to localStorage
    tasks.push(taskText);
    saveTasks();

    renderTasks();

    input.value = "";
});

// Initial render of tasks from localStorage
renderTasks();


