"use strict";

const express = require("express");
const Task = require("../Models/task.model");
const router = express.Router();

router.post("/task-registration", (req, res) => {
  let newTask = new Task({
    name: req.body.name,
    date: req.body.date,
    owner: req.body.owner,
    priority: req.body.priority,
    description: req.body.description,
  });

  newTask.save((err) => {
    if (err) {
      res.json({
        err,
        estado: "fallido",
      });
    } else {
      res.json({
        msj: "Task registered.",
        estado: "correcto",
      });
    }
  });
});

router.get("/get-task", (req, res) => {
  Task.find((error, lista) => {
    if (error) {
      res.json({
        msj: "Error while showing the tasks",
        error,
      });
    } else {
      res.json({
        msj: "Task Added Succesfully",
        lista,
      });
    }
  });
});

module.exports = router;
