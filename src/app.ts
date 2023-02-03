import cors from "cors";
import express from "express";
import api from "./api";
import { v2 as cloudinary } from "cloudinary";

import dotenv from "dotenv";
import corsOptions from "./config/corsOptions";

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

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send(
    "Bienvenue sur l'API Enedis Share ! Commencez votre recherche en ajoutant /api/v1 à l'url de base, puis ajoutez-y le nom de la ressource recherchée"
  );
});

app.use("/api/v1", api);

export default app;
