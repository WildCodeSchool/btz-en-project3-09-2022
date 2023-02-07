/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import prisma from "../../../prisma/client";
import { Prisma } from "@prisma/client";

export default function checkIfIsOwner<T extends Prisma.ModelName>(
  resource: Uncapitalize<T>
) {
  return async function (req: Request, res: Response, next: NextFunction) {
    const { id: userId, role } = req.user;
    const { id: resourceId } = req.params;

    const value = await (prisma[resource] as any).findUnique({
      where: {
        id: resourceId,
      },
    });

    if (role === "ADMIN" || role === "SUPER_ADMIN") {
      return next();
    }

    if (value.ownerId === userId) {
      return next();
    }
    res.status(403).json("Unauthorized");
  };
}
