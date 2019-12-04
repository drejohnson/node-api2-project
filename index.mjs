import server from "./api/server.mjs";

const port = process.env.PORT || 4000;

server.listen(port, () =>
  console.log(`Server up and running on port: ${port}`)
);
