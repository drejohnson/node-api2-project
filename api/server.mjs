import express from "express";
import cors from "cors";
import postsRoute from "../routes/posts.mjs";

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/posts", postsRoute);

server.use("/", (req, res) =>
  res.send(`
    <h2>Lambda Posts API</h2>
    <p>Welcome to the Lambda Posts API</p>
  `)
);

// Export server
export default server;
