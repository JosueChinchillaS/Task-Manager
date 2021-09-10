"use strict";

document.querySelector("#btn-add").addEventListener("click", function () {
  document.querySelector("#popup").classList.add("active");
  document.querySelector(".main").classList.add("active");
});

document
  .querySelector("#popup .close-btn")
  .addEventListener("click", function () {
    document.querySelector("#popup").classList.remove("active");
    document.querySelector(".main").classList.remove("active");
  });


  document.querySelector(".new-task__btn").addEventListener("click", function () {
    document.querySelector("#popup").classList.add("active");
    document.querySelector(".main").classList.add("active");
  });
  
  document
    .querySelector("#popup .close-btn")
    .addEventListener("click", function () {
      document.querySelector("#popup").classList.remove("active");
      document.querySelector(".main").classList.remove("active");
    });
// Form validation

// Variables
const taskName = document.querySelector("#task-name");
const taskDate = document.querySelector("#task-date");
const taskOwner = document.querySelector("#task-owner");
const taskPriority = document.querySelector("#task-priority");
const taskDescription = document.querySelector("#task-description");
const addTask = document.querySelector("#add-task__btn");

// Restrict date

let date = new Date();
// date.toLocaleString('default', {month: 'short'})
// console.log(date)

// let months =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]

let today = date.getDate();
let month = date.getMonth() + 1;

let year = date.getUTCFullYear();

if (today < 10) {
  today = "0" + today;
}
if (month < 10) {
  month = "0" + month;
}

let minDate = year + "-" + month + "-" + today;

document.getElementById("task-date").setAttribute("min", minDate);





// Form Validation

const validateForm = () => {
  let error = false;
  let required = document.querySelectorAll("#add-task :required");

  required.forEach((e) => {
    if (e.value == "") {
      error = true;
      e.classList.add("error");
    } else {
      e.classList.remove("error");
    }
  });

  if (error == true) {
    Swal.fire({
      icon: "warning",
      title: "Información incompleta",
      confirmButtonColor: "#fe9cc8",
      confirmButtonText: "Entendido",
    });
  } else {
    
    let datos = {
      name: taskName.value,
      date: taskDate.value,
      owner: taskOwner.value,
      priority: taskPriority.value,
      description: taskDescription.value,
    };

    registrarDatos(
      "http://localhost:3000/api/task-registration",
      datos,
      "../public/index.html"
    );
    Swal.fire({
      icon: "success",
      title: "Se agregó correctamente",
      text: "Puede continuar",
      confirmButtonColor: "#fe9cc8",
      confirmButtonText: "Inicio",
    }).then(() => {
      window.location.href = "../public/index.html";
    });
  }
};

addTask.addEventListener("click", validateForm);
