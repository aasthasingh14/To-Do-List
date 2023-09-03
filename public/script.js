document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
 
    function createTaskElement(taskText) {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox"><span class="checkmark"></span>
            <label class="container">${taskText}</label>
            <span class="edit-btn">Edit</span>
            <span class="close">Delete</span>
        `;
        return li;
    }
 
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = "";
            attachCloseEvent(taskElement);
            attachEditEvent(taskElement);
            attachCompleteEvent(taskElement);
        }
    }
 
    function removeTask(event) {
        const taskElement = event.target.parentElement;
        taskList.removeChild(taskElement);
    }
 
    function editTask(event) {
        const taskElement = event.target.parentElement;
        const taskTextElement = taskElement.querySelector("label");
        const editedText = prompt("Edit task:", taskTextElement.textContent);
        if (editedText !== null) {
            taskTextElement.textContent = editedText;
        }
    }
 
    function completeTask(event) {
        const taskTextElement = event.target;
        taskTextElement.classList.toggle("completed");
    }
 
    function attachCloseEvent(taskElement) {
        const closeButton = taskElement.querySelector(".close");
        closeButton.addEventListener("click", removeTask);
    }
 
    function attachEditEvent(taskElement) {
        const editButton = taskElement.querySelector(".edit-btn");
        editButton.addEventListener("click", editTask);
    }
 
    function attachCompleteEvent(taskElement) {
        const taskTextElement = taskElement.querySelector("label");
        taskTextElement.addEventListener("click", completeTask);
    }
 
    addTaskButton.addEventListener("click", addTask);
 
    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});


