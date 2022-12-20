import { Router } from "express";
import users from "./users/routes";
import teams from "./teams/routes";
import posts from "./posts/routes";

const router = Router();

router.use("/users", users);
router.use("/teams", teams);
router.use("/posts", posts);

export default router;
