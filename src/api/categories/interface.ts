import { RequestHandler } from "express";
import { Category } from "@prisma/client";
import ResponseError from "../ResponseError";

type TCategoryBody = Omit<Category, "id" | "createdAt" | "updatedAt">;

type TQuery = { userID?: string; space?: string };

export interface CategoryHandlers {
  getAll: RequestHandler<null, Category[] | ResponseError, null, TQuery>;
  getOne: RequestHandler<
    { id: string },
    Category | ResponseError,
    null,
    TQuery
  >;
  create: RequestHandler<
    { id: string },
    Category | ResponseError,
    TCategoryBody
  >;
  update: RequestHandler<
    { id: string },
    Category | ResponseError,
    TCategoryBody
  >;
  delete: RequestHandler;
}
