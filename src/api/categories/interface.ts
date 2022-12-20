import { RequestHandler } from "express";
import { Category } from "@prisma/client";
import ResponseError from "../ResponseError";

type CategoryBodyCreate = Omit<Category, "id" | "createdAt" | "updatedAt">;
type CategoryBodyUpdate = Omit<Category, "id" | "createdAt" | "updatedAt">;

export interface CategoryHandlers {
  getAll: RequestHandler<null, Category[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Category | ResponseError, null>;
  create: RequestHandler<
    { id: string },
    Category | ResponseError,
    CategoryBodyCreate
  >;
  update: RequestHandler<
    { id: string },
    Category | ResponseError,
    CategoryBodyUpdate
  >;
  delete: RequestHandler;
}
