import comments from "./comments/routes";
import { Router } from "express";

const router = Router();

router.use("/comments", comments);

export default router;
