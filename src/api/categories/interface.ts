import { RequestHandler } from "express";
import { Category } from "@prisma/client";
import ResponseError from "../ResponseError";

type TCategoryBody = Omit<Category, "id" | "createdAt" | "updatedAt">;
type TAddUserBody = string[];
type TRemoveUserBody = string[];

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
  delete: RequestHandler<{ id: string }, Category | ResponseError, null>;
  addUser: RequestHandler<
    { id: string },
    Category | ResponseError,
    TAddUserBody
  >;
  removeUser: RequestHandler<
    { id: string },
    Category | ResponseError,
    TRemoveUserBody
  >;
  disable: RequestHandler<{ id: string }, Category | ResponseError, null>;
  undisable: RequestHandler<{ id: string }, Category | ResponseError, null>;
}
