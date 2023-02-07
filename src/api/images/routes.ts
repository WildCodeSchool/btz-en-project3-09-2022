import { Router } from "express";
import checkIfIsAdminOrSuper from "../../middlewares/permissions/checkIfIsAdminOrSuper";
import checkIfIsDisabledForGetOne from "../../middlewares/permissions/checkIfIsDisabledForGetOne";
import checkIfIsOwnerUser from "../../middlewares/permissions/checkIfIsOwnerUser";
import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", checkIfIsDisabledForGetOne("image"), controller.getOne);
router.post("/", controller.create);
router.delete("/:id", checkIfIsOwnerUser("image"), controller.delete);
router.put("/:id", checkIfIsAdminOrSuper(), controller.update);

export default router;
