const logger = require("../logger/logger");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  const mongoDb = config.get("db");
  mongoose
    .connect(mongoDb)
    .then(() => logger.info(`Connect to mongoDB ${mongoDb}`))
    .catch((err) => `Could not Connect to ${mongoDb} because ${err}`);
};
