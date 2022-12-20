import spaces from "./space/routes";
import categories from "./categories/routes";
import images from "./images/routes";
import { Router } from "express";

const router = Router();

router.use("/spaces", spaces);
router.use("/categories", categories);
router.use("/images", images);

export default router;
