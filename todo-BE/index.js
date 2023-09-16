const express = require("express");
const app = express();

const logger = require("./logger/logger");

const todo = require("./routes/todos");

app.use(express.json());
app.use("/api/todo", todo);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => logger.info(`Listen on port ${PORT} ...`));
