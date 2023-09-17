const express = require("express");
const router = express.Router();
const { validateTodo, TodoModel } = require("../models/todo");

router.get("/getAllTodo", async (req, res) => {
  const todos = await TodoModel.find();
  res.send(todos);
});

router.post("/postTodo", async (req, res) => {
  const { error } = validateTodo(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let todo = new TodoModel({
    todo: req.body.todo,
  });

  todo = await todo.save();

  res.send(todo);
});

router.put("/updateTodo/:id", async (req, res) => {
  const { error } = validateTodo(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const todo = await TodoModel.findByIdAndUpdate(
    req.params.id,
    {
      todo: req.body.todo,
    },
    { new: true }
  );

  if (!todo) return res.status(400).send(`The todo given ID was not found.`);
  res.send(todo);
});

router.delete("/deleteTodo/:id", async (req, res) => {
  const todo = await TodoModel.findByIdAndRemove(req.params.id);

  if (!todo) return res.status(400).send(`The todo given ID was not found.`);
  res.send(todo);
});

module.exports = router;
