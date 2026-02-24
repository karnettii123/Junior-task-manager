const form = document.getElementById("task-form")
const input = document.getElementById("input-task")
const priority = document.getElementById("select-priority")
const taskList = document.getElementById("task-list")
const h3 = document.getElementById("h3")


function formcreate (h3Value, inputValue, priorityValue) {

const TaskElement = document.createElement("div");
const TaskInfo = document.createElement("div");
const TaskH3 = document.createElement("h3");
const TaskText = document.createElement("div");
const TaskDate = document.createElement("div");
const now = new Date().toLocaleString("uk-UA");
const TaskPriorityList = document.createElement("div");
const TaskPriority = document.createElement("div");
const TaskButton = document.createElement("button");

TaskElement.classList.add("task");
TaskInfo.classList.add("task-info")
TaskDate.classList.add("date")
TaskPriorityList.classList.add("priority-list");

TaskInfo.append(TaskH3, TaskText, TaskDate);
TaskElement.append(TaskInfo, TaskPriorityList);
taskList.append(TaskElement);
TaskPriorityList.append(TaskPriority,TaskButton);

TaskButton.addEventListener("click",function() {
    TaskElement.remove()
})

TaskButton.textContent = "Delete";
TaskH3.textContent = h3Value;
TaskText.textContent = inputValue;
TaskPriority.textContent = priorityValue;
TaskDate.textContent = now;

}

function checkform (inputValue, h3Value){
    if(inputValue === "" ){
    alert ("Input your Task")
    return false
}
else if (h3Value === ""){
    alert ("Input your Task Name")
    return false
}
    return true;
}

form.addEventListener("submit", function(event) {
event.preventDefault();

const inputValue = input.value;
const priorityValue = priority.value;
const h3Value = h3.value;

if(checkform(inputValue, h3Value)){
formcreate(h3Value, inputValue, priorityValue);
}});
