import { RequestHandler } from "express";
import { Category } from "@prisma/client";
import ResponseError from "../ResponseError";

type TCategoryBody = Omit<Category, "id" | "createdAt" | "updatedAt">;

export interface CategoryHandlers {
  getAll: RequestHandler<null, Category[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Category | ResponseError, null>;
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
