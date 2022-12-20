import spaces from "./spaces/routes";
import { Router } from "express";

const router = Router();

router.use("/spaces", spaces);

export default router;
