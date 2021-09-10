"use strict";

const tasksSection = document.getElementById("cell-main");
const taskContainer = document.querySelector(".cell");
const getInfo = async () => {
  return await obtenerDatos("http://localhost:3000/api/get-task");
};

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let monthName = months[date.getMonth()];

const loadInfo = async () => {
  let taskList = await getInfo();
  tasksSection.innerHTML = "";
  date = monthName + " " + today;

  taskList.forEach((task) => {
    tasksSection.innerHTML += `
    <div class="cell-header">
                    <div class="icon">
                      <ion-icon name="hand-left-outline"></ion-icon>
                    </div>
                    <div class="task-name"><h2>${task.name}</h2></div>
                    <div class="more">
                      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    </div>
                  </div>
                  <div class="cell-body">
                    <p id="description">${task.description}</p>
                  </div>
                  <div class="cell-footer">
                      <div class="date" id="date-${task._id}">
                        <div class="time-icon"><ion-icon name="time-outline"></ion-icon></div>
                        <div class="time"><p>${task.date}</p></div>
                      </div>

                      <div><p id="priority">${task.priority}</p></div>
                  </div>
    `;

    switch (task.priority.toUpperCase()) {
      case "HIGH":
        document.getElementById(`date-${task._id}`).style.backgroundColor = "red";
        break;
      case "MEDIUM":
        document.getElementById(`date-${task._id}`).style.backgroundColor = "yellow";
        break;
      case "LOW":
        document.getElementById(`date-${task._id}`).style.backgroundColor = "green";
        break;
    }
  });

  
};

loadInfo();











const drag = document.getElementById(`cell-main`);
const drop = document.querySelectorAll(".cell");
// const completed = document.querySelectorAll('.completed .cell')

drag.addEventListener("dragstart", dragStart);
drag.addEventListener("dragend", dragEnd);

for (const empty of drop) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.classList.remove("invisible");
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}
function dragLeave() {
  this.className = "cell";
}
function dragDrop() {
  this.className = "cell";
  this.append(drag);
}
