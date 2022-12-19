import spaces from "./space/routes";
import categories from "./categories/routes";
import { Router } from "express";

const router = Router();

router.use("/spaces", spaces);
router.use("/categories", categories);

export default router;
