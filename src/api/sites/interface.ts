/* eslint-disable @typescript-eslint/no-explicit-any */
import { Site } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../ResponseError";

type TSiteBody = Omit<Site, "id" | "createdAt" | "updatedAt">;

export interface ISiteHandlers {
  getAll: RequestHandler<null, Site[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Site | ResponseError, null>;
  create: RequestHandler<null, Site | ResponseError, TSiteBody>;
  update: RequestHandler<{ id: string }, Site | ResponseError, TSiteBody>;
  delete: RequestHandler<{ id: string }, Site | ResponseError, null>;
}
