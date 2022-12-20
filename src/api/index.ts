import { Router } from "express";
import posts from "./posts/routes";

const router = Router();

router.use("/posts", posts);

export default router;
