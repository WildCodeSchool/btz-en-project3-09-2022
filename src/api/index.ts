import { Router } from "express";
import users from "./users/routes";
import teams from "./teams/routes";
import posts from "./posts/routes";
import notifications from "./notifications/routes";
import images from "./images/routes";

const router = Router();

router.use("/users", users);
router.use("/teams", teams);
router.use("/posts", posts);
router.use("/notifications", notifications);
router.use("/images", images);

export default router;
