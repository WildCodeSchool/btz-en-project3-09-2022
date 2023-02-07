import { Router } from "express";
import checkIfIsAdminOrSuper from "../../middlewares/permissions/checkIfIsAdminOrSuper";
import checkIfIsOwnerUser from "../../middlewares/permissions/checkIfIsOwnerUser";
import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", controller.create);
router.put("/:id", checkIfIsOwnerUser("site"), controller.update);
router.delete("/:id", checkIfIsAdminOrSuper(), controller.delete_);

export default router;
