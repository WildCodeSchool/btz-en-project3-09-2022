import { Router } from "express";
import checkIfIsAdminOrSuper from "../../middlewares/permissions/checkIfIsAdminOrSuper";
import checkIfIsAuthor from "../../middlewares/permissions/checkIfIsAuthor";
import checkIfIsDisabledForGetOne from "../../middlewares/permissions/checkIfIsDisabledForGetOne";
import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", checkIfIsDisabledForGetOne("post"), controller.getOne);
router.post("/", controller.create);
router.put("/:id", checkIfIsAuthor("post"), controller.update);
router.delete("/:id", checkIfIsAdminOrSuper(), controller.delete);

export default router;
