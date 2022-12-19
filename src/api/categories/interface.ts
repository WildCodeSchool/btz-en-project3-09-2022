import { RequestHandler } from "express";
import { Category } from "@prisma/client";

type ResponseError = {
  message: string | unknown;
};

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
