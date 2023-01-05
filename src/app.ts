import cors from "cors";
import express from "express";
import api from "./api";

import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    allowedHeaders: ["Authorization", "Content-type", "OPTION"],
    exposedHeaders: ["Authorization", "Content-type", "OPTION"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", api);

export default app;
