"use strict";

const obtenerDatos = async (purl) => {
  let listaDatos = [];
  await axios({
    url: purl,
    method: "get",
    responseType: "json",
  })
    .then((response) => {
      listaDatos = response.data.lista;
    })
    .catch((error) => {
      console.log(error);
    });

  return listaDatos;
};

const registrarDatos = async (purl, pData, purlRedireccion) => {
  await axios({
    url: purl,
    method: "post",
    responseType: "json",
    data: pData,
  }).then((response) => {
    if (element.value == "") {
      error = true;
      element.classList.add("error");
      console.log(error);
    } else {
      element.classList.remove("error");
    }
  });

  if (error == true) {
    Swal.fire({
      icon: "warning",
      title: "Información incompleta",
      confirmButtonColor: "#FF8011",
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
      confirmButtonColor: "#FF8011",
      confirmButtonText: "Inicio",
    }).then(() => {
      window.location.href = "";
    });
  }
};
