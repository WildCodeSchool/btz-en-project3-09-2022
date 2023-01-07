import { User } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../ResponseError";

export type TUserWithoutPassword = Omit<User, "password">;

type TUserBody = Omit<User, "id" | "createdAt" | "updatedAt">;

export interface IUserHandlers {
  getAll: RequestHandler<null, TUserWithoutPassword[] | ResponseError, null>;
  getOne: RequestHandler<
    { id: string },
    TUserWithoutPassword | ResponseError,
    null
  >;
  create: RequestHandler<null, TUserWithoutPassword | ResponseError, TUserBody>;
  update: RequestHandler<
    { id: string },
    TUserWithoutPassword | ResponseError,
    TUserBody
  >;
  delete: RequestHandler<
    { id: string },
    TUserWithoutPassword | ResponseError,
    null
  >;
}
