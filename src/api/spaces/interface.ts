import { RequestHandler } from "express";
import { Space } from "@prisma/client";
import ResponseError from "../ResponseError";

type TSpaceBody = Omit<Space, "id" | "createdAt" | "updatedAt">;

type TSpaceQuery = { categories?: string; owner?: string };

type TAddUserBody = string[];
type TRemoveUserBody = string[];

export interface SpaceHandlers {
  getAll: RequestHandler<null, Space[] | ResponseError, null, TSpaceQuery>;
  getOne: RequestHandler<
    { id: string },
    Space | ResponseError,
    null,
    TSpaceQuery
  >;
  create: RequestHandler<
    { id: string },
    Space | ResponseError | string,
    TSpaceBody
  >;
  update: RequestHandler<{ id: string }, Space | ResponseError, TSpaceBody>;
  delete: RequestHandler;
  addUser: RequestHandler<{ id: string }, Space | ResponseError, TAddUserBody>;
  removeUser: RequestHandler<
    { id: string },
    Space | ResponseError,
    TRemoveUserBody
  >;
  disable: RequestHandler<{ id: string }, Space | ResponseError, null>;
  undisable: RequestHandler<{ id: string }, Space | ResponseError, null>;
}
