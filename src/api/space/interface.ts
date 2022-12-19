import { RequestHandler } from "express";
import { Space } from "@prisma/client";

type ResponseError = {
  message: string | unknown;
};

export interface SpaceHandlers {
  getAll: RequestHandler<null, Space[] | ResponseError, null>;
  //   getOne: RequestHandler;
  //   create: RequestHandler;
  //   update: RequestHandler;
  //   delete: RequestHandler;
}
