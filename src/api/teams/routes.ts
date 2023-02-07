import { Router } from "express";
import checkIfIsAdminOrSuper from "../../middlewares/permissions/checkIfIsAdminOrSuper";
import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);

router.post("/", controller.create);

router.put("/:id", checkIfIsAdminOrSuper(), controller.update);

router.delete("/:id", checkIfIsAdminOrSuper(), controller.delete);

export default router;
