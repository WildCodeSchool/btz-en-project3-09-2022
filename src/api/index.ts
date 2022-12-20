import { Router } from "express";
import users from "./users/routes";
import teams from "./teams/routes";
import posts from "./posts/routes";
import spaces from "./spaces/routes";

const router = Router();

router.use("/users", users);
router.use("/teams", teams);
router.use("/posts", posts);
router.use("/spaces", spaces);

export default router;
