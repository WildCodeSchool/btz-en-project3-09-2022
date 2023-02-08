/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";

export default function checkIfIsAdminOrSuper() {
  return async function (req: Request, res: Response, next: NextFunction) {
    const { role } = req.user;
    if (role === "ADMIN" || role === "SUPER_ADMIN") {
      return next();
    }
    res.status(403).json("Unauthorized");
  };
}
