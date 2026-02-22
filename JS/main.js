const form = document.getElementById("task-form")
const input = document.getElementById("input-task")
const priority = document.getElementById("select-priority")
const taskList = document.getElementById("task-list")
const h3 = document.getElementById("h3")

form.addEventListener("submit", function(event) {
event.preventDefault();

const inputValue = input.value;
const priorityValue = priority.value;
const h3Value = h3.value;

if(inputValue === "" )
    alert ("Input your Task")
else if (h3Value === "")
    alert ("Input your Task Name")
else {

const TaskElement = document.createElement("div");
TaskElement.classList.add("task");

const TaskH3 = document.createElement("h3");
const TaskText = document.createElement("div");

TaskElement.append(TaskH3, TaskText);

TaskH3.textContent = h3Value;
TaskText.textContent = inputValue;

taskList.append(TaskElement);

input.value = "";
h3.value = "";
}})