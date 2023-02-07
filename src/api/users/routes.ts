import { Router } from "express";
import checkIfIsAdminOrSuper from "../../middlewares/permissions/checkIfIsAdminOrSuper";
import checkIfIsDisabledForGetOne from "../../middlewares/permissions/checkIfIsDisabledForGetOne";
import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", checkIfIsDisabledForGetOne("user"), controller.getOne);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", checkIfIsAdminOrSuper(), controller.delete_);

export default router;
