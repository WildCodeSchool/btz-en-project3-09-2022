import { Router } from "express";
import checkIfIsAdminOrSuper from "../../middlewares/permissions/checkIfIsAdminOrSuper";
import checkIfIsDisabledForGetOne from "../../middlewares/permissions/checkIfIsDisabledForGetOne";
import checkIfIsOwner from "../../middlewares/permissions/checkIfIsOwner";
import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", checkIfIsDisabledForGetOne("category"), controller.getOne);
router.post("/", controller.create);
router.delete("/:id", checkIfIsAdminOrSuper(), controller.delete);
router.put("/:id", checkIfIsOwner("category"), controller.update);
router.put("/:id/addUser", checkIfIsOwner("category"), controller.addUser);
router.put(
  "/:id/removeUser",
  checkIfIsOwner("category"),
  controller.removeUser
);

export default router;
