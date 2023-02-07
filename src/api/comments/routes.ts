import { Router } from "express";
import checkIfIsAdminOrSuper from "../../middlewares/permissions/checkIfIsAdminOrSuper";
import checkIfIsAuthor from "../../middlewares/permissions/checkIfIsAuthor";
import checkIfIsDisabledForGetOne from "../../middlewares/permissions/checkIfIsDisabledForGetOne";
import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", checkIfIsDisabledForGetOne("comment"), controller.getOne);
router.post("/", controller.create);
router.put("/:id", checkIfIsAuthor("comment"), controller.update);
router.delete("/:id", checkIfIsAdminOrSuper(), controller.delete_);
router.put("/:id/disable", checkIfIsAdminOrSuper(), controller.disable);
router.put("/:id/undisable", checkIfIsAdminOrSuper(), controller.undisable);

export default router;
