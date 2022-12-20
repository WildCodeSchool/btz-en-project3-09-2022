import { Router } from "express";
import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", controller.create);
router.delete("/:id", controller.delete);
router.put("/:id", controller.update);

export default router;
