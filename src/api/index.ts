import spaces from "./space/routes";
import categories from "./categories/routes";
import images from "./images/routes";
import { Router } from "express";
import users from "./users/routes";
import teams from "./teams/routes";
import posts from "./posts/routes";

const router = Router();

router.use("/users", users);
router.use("/teams", teams);
router.use("/posts", posts);
router.use("/spaces", spaces);
router.use("/categories", categories);
router.use("/images", images);

export default router;
