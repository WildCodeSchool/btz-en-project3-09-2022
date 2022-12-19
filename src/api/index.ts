import { Router } from "express";
import post from "./Post/routes";

const router = Router();

router.use("/post", post);

export default router;
