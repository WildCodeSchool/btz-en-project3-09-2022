import { Router } from "express";
import checkIfIsAdminOrSuper from "../../middlewares/permissions/checkIfIsAdminOrSuper";
import checkIfIsDisabledForGetOne from "../../middlewares/permissions/checkIfIsDisabledForGetOne";
import checkIfIsOwner from "../../middlewares/permissions/checkIfIsOwner";
import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", checkIfIsDisabledForGetOne("space"), controller.getOne);
router.post("/", controller.create);
router.put("/:id", checkIfIsOwner("space"), controller.update);
router.delete("/:id", checkIfIsAdminOrSuper(), controller.delete);
router.put("/:id/addUser", checkIfIsOwner("space"), controller.addUser);
router.put("/:id/removeUser", checkIfIsOwner("space"), controller.removeUser);

export default router;
