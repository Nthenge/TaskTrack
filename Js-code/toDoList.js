var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");
var task = taskInput.value

function addTask() {
  if (task !== "") {
    // code for radio buttons
    var taskRadio = document.createElement("input");
    taskRadio.setAttribute("type", "checkbox");
    taskRadio.onchange = function() {
    var taskLabel = this.parentNode.querySelector('.task-label');
    if (this.checked) {
      taskLabel.style.textDecoration = "line-through";
      taskLabel.style.textDecorationColor = "red";
      } else {
        taskLabel.style.textDecoration = "none";
        }
    };

    // creating label after radio button
    var taskLabel = document.createElement("label");
    taskLabel.classList.add("task-label");
    taskLabel.innerHTML = task;

    // creating x for deleting a task
    var taskRemove = document.createElement("span");
    taskRemove.classList.add("task-remove");
    taskRemove.innerHTML = "x";
    taskRemove.onclick = function() {
    taskList.removeChild(taskItem);
    };

    taskItem.appendChild(taskRadio);
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(taskRemove);
    taskList.appendChild(taskItem);
  }

  taskInput.value = "";
}