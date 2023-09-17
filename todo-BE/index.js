const express = require("express");
const app = express();

// Logger
const logger = require("./logger/logger");

// Routes
const todo = require("./routes/todos");

// DataBase
require("./startups/db")();

app.use(express.json());
app.use("/api/todo", todo);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => logger.info(`Listen on port ${PORT} ...`));
