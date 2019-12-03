import express from "express";

// const hubsRoute = require("../routes/hubs");

const server = express();

server.use(express.json());

// server.use("/api/hubs", hubsRoute);

server.use("/", (req, res) =>
  res.send(`
    <h2>Lambda Posts API</h2>
    <p>Welcome to the Lambda Posts API</p>
  `)
);

// Export server
export default server;
