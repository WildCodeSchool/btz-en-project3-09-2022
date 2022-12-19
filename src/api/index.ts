import spaces from "./space/routes";
import { Router } from "express";

const router = Router();

router.use("/spaces", spaces);

export default router;
