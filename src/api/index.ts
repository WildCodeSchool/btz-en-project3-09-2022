import books from "./books/routes";
import { Router } from "express";

const router = Router();

router.use("/books", books);

export default router;
