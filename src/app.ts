import cors from "cors";
import express from "express";
import api from "./api";
import { v2 as cloudinary } from "cloudinary";

import dotenv from "dotenv";

dotenv.config();

const cloud = process.env.CLOUDINARY_CLOUD;
const apiKey = process.env.CLOUDINARY_API_KEY;
const secretKey = process.env.CLOUDINARY_SECRET_KEY;

cloudinary.config({
  cloud_name: cloud,
  api_key: apiKey,
  api_secret: secretKey,
  secure: true,
});

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
