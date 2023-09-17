const express = require("express");
const router = express.Router();
const { validateTodo, TodoModel } = require("../models/todo");

router.post("/postTodo", async (req, res) => {
  const { error } = validateTodo(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let todo = new TodoModel({
    todo: req.body.todo,
  });

  todo = await todo.save();

  res.send(todo);
});

router.get("/getAllTodo", (req, res) => {
  res.status(200).send(arr);
});

module.exports = router;
