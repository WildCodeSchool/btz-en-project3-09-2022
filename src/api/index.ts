import sites from "./sites/routes";
import { Router } from "express";

const router = Router();

router.use("/sites", sites);

export default router;
