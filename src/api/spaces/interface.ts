import { RequestHandler } from "express";
import { Space } from "@prisma/client";

type ResponseError = {
  message: string | unknown;
};

type SpaceBodyCreate = Omit<Space, "id" | "createdAt" | "updatedAt">;
type SpaceBodyUpdate = Omit<Space, "id" | "createdAt" | "updatedAt">;

export interface SpaceHandlers {
  getAll: RequestHandler<null, Space[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Space | ResponseError, null>;
  create: RequestHandler<
    { id: string },
    Space | ResponseError,
    SpaceBodyCreate
  >;
  update: RequestHandler<
    { id: string },
    Space | ResponseError,
    SpaceBodyUpdate
  >;
  delete: RequestHandler;
}
