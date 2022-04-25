import http from "http";
import app from "./app";

const port: number = 3000;

const server = http.createServer(app).listen(port, () => {
  `Server listening on port ${port}...`;
});
