const express = require("express");
const server = express();
const morgan = require("morgan"); // search
const helmet = require("helmet"); // search
const cors = require("cors"); // search
const todoRoutes = require("./routes/todo.routes");

// middlewares
server.use(express.json())
server.use(morgan("dev"));
server.use(helmet());
// search for how to restrict other clients from reaching your server
server.use(cors({})); // exposed to any client over js to communicate with your server

// apis
server.use("/api/v1", todoRoutes);

// server listen

module.exports = {
  server,
};
