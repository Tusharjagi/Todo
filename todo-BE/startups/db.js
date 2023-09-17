const logger = require("../logger/logger");
const mongoose = require("mongoose");

module.exports = function () {
  const mongoDb = "mongodb://localhost/todoApp";
  mongoose
    .connect(mongoDb)
    .then(() => logger.info(`Connect to mongoDB ${mongoDb}`))
    .catch((err) => `Could not Connect to ${mongoDb} because ${err}`);
};
