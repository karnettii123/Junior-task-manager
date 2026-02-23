const form = document.getElementById("task-form")
const input = document.getElementById("input-task")
const priority = document.getElementById("select-priority")
const taskList = document.getElementById("task-list")
const h3 = document.getElementById("h3")


function formcreate (h3Value, inputValue, priorityValue) {

const TaskElement = document.createElement("div");
TaskElement.classList.add("task");
const TaskInfo = document.createElement("div");
TaskInfo.classList.add("task-info")

const TaskH3 = document.createElement("h3");
const TaskText = document.createElement("div");
const TaskDate = document.createElement("div");

TaskInfo.append(TaskH3, TaskText, TaskDate)

const TaskPriorityList = document.createElement("div");
TaskPriorityList.classList.add("priority-list");

const TaskPriority = document.createElement("div");
const TaskButton = document.createElement("button");
TaskButton.textContent = "Delete";

TaskButton.addEventListener("click",function() {
    TaskElement.remove()
})

TaskPriorityList.append(TaskPriority,TaskButton);

TaskH3.textContent = h3Value;
TaskText.textContent = inputValue;
TaskPriority.textContent = priorityValue;

TaskElement.append(TaskInfo, TaskPriorityList);

taskList.append(TaskElement);
}

function checkform (inputValue, h3Value, priorityValue){
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
};

input.value = "";
h3.value = "";
})



if(priorityValue === "Low"){
    TaskPriority.classList.add("Low");
} else if (TaskPriority === "Medium"){
    TaskPriority.classList.add("Medium");
} else if (TaskPriority === "High"){
    TaskPriority.classList.add("High");
}