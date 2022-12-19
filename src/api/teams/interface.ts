import { RequestHandler } from "express";
import ResponseError from "../ResponseError";
import { team } from "@prisma/client";

type TTeamBodyCreate = {
  name: string;
};

export interface ITeamHandlers {
  getAll: RequestHandler<null, team[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, team | ResponseError, null>;
  create: RequestHandler<null, team | ResponseError, TTeamBodyCreate>;
  update: RequestHandler<{ id: string }, team | ResponseError, TTeamBodyCreate>;
  delete: RequestHandler<{ id: string }, team | ResponseError, null>;
}
