/* eslint-disable @typescript-eslint/no-explicit-any */
import { Site } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../ResponseError";

// type TSiteBodyCreate = {
//   name: string;
// };

export interface ISiteHandlers {
  getAll: RequestHandler<null, Site[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Site | ResponseError, null>;
}
