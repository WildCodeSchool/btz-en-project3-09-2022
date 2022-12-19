import { Router } from "express";
import users from "./users/routes";
import teams from "./teams/routes";

const router = Router();

router.use("/users", users);
router.use("/teams", teams);

export default router;
