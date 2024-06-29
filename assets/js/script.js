// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// variables for iD
const taskForm = $("#taskForm");
const formTitle = $("#formTitle");
const formDate = $("#formDate");
const formDescription = $("#formDescription");

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const id = newId++;
    localStorage.setItem("newId", JSON.stringify(newId));
}

// Todo: create a function to create a task card
function createTaskCard(task) {
const card = $("<div>").addClass("card draggable").attr("id", task.id);
const cardBody = $("<div>").addClass("card-body");
const cardTitle = $("<h5>").addClass("card-title").text(task.title);
const cardText = $("<p>").addClass("card-text").text(task.description);
const cardDueDate = $("<p>").addClass("card-text").text('Due Date: ' + task.dueDate);
const deleteBtn = $("<button>").addClass("btn btn-danger").text("Delete");
deleteBtn.click(handleDeleteTask);
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
