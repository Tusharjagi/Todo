const express = require("express");
const app = express();
const router = express.Router();

const arr = [];
router.post("/postTodo", (req, res) => {
  const { todo } = req.body;
  const data = {
    id: arr.length + 1,
    todo,
  };
  arr.push(data);
  console.log(arr);
  res.status(200).send(data);
});

router.get("/getAllTodo", (req, res) => {
  res.status(200).send(arr);
});

module.exports = router;
