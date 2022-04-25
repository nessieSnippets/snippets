import express, { Application } from "express";

const app: Application = express();

app.get("/health", (req, res) => {
  res.send("OK");
});

export default app;
