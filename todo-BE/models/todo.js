const mongoose = require("mongoose");
const Joi = require("joi");

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
});

const TodoModel = mongoose.model("TodoModel", todoSchema);

function validateTodo(todo) {
  const schema = Joi.object({
    todo: Joi.string().min(1).max(100).required(),
  });
  return schema.validate(todo);
}

exports.TodoModel = TodoModel;
exports.validateTodo = validateTodo;
