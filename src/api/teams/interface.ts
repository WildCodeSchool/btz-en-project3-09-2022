import { RequestHandler } from "express";
import ResponseError from "../ResponseError";
import { Team } from "@prisma/client";

type TTeamBodyCreate = {
  name: string;
};

export interface ITeamHandlers {
  getAll: RequestHandler<null, Team[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Team | ResponseError, null>;
  create: RequestHandler<null, Team | ResponseError, TTeamBodyCreate>;
  update: RequestHandler<{ id: string }, Team | ResponseError, TTeamBodyCreate>;
  delete: RequestHandler<{ id: string }, Team | ResponseError, null>;
}
