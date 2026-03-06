const form = document.getElementById("task-form")
const input = document.getElementById("input-task")
const priority = document.getElementById("select-priority")
const taskList = document.getElementById("task-list")
const h3 = document.getElementById("h3")

let tasks = JSON.parse(localStorage.getItem("tasks")) || []


function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks))
}


function createTaskElement(task){

const TaskElement = document.createElement("div")
const TaskInfo = document.createElement("div")
const TaskH3 = document.createElement("h3")
const TaskText = document.createElement("div")
const TaskDate = document.createElement("div")

const TaskPriorityList = document.createElement("div")
const TaskPriority = document.createElement("div")
const TaskButton = document.createElement("button")

TaskElement.classList.add("task")
TaskInfo.classList.add("task-info")
TaskDate.classList.add("date")
TaskPriorityList.classList.add("priority-list")

TaskH3.textContent = task.title
TaskText.textContent = task.text
TaskPriority.textContent = task.priority
TaskDate.textContent = task.date

TaskButton.textContent = "Delete"

TaskInfo.append(TaskH3, TaskText, TaskDate)
TaskPriorityList.append(TaskPriority, TaskButton)

TaskElement.append(TaskInfo, TaskPriorityList)

taskList.append(TaskElement)


TaskButton.addEventListener("click", function(){

tasks = tasks.filter(t => t.id !== task.id)

saveTasks()

TaskElement.remove()

})

}



function checkform(inputValue, h3Value){

if(inputValue === ""){
alert("Input your Task")
return false
}

if(h3Value === ""){
alert("Input your Task Name")
return false
}

return true

}



form.addEventListener("submit", function(event){

event.preventDefault()

const inputValue = input.value.trim()
const priorityValue = priority.value
const h3Value = h3.value.trim()

if(!checkform(inputValue, h3Value)) return


const newTask = {

id: Date.now(),
title: h3Value,
text: inputValue,
priority: priorityValue,
date: new Date().toLocaleString("uk-UA")

}

tasks.push(newTask)

saveTasks()

createTaskElement(newTask)

input.value = ""
h3.value = ""

})



function loadTasks(){

tasks.forEach(task => {

createTaskElement(task)

})

}

loadTasks()