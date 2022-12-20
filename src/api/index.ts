import { Router } from "express";
import sites from "./sites/routes";
import users from "./users/routes";
import teams from "./teams/routes";
import posts from "./posts/routes";
import notifications from "./notifications/routes";
import categories from "./categories/routes";
import images from "./images/routes";
import spaces from "./spaces/routes";

const router = Router();

router.use("/users", users);
router.use("/teams", teams);
router.use("/posts", posts);
router.use("/notifications", notifications);
router.use("/categories", categories);
router.use("/images", images);
router.use("/spaces", spaces);
router.use("/sites", sites);

export default router;
