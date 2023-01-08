import { RequestHandler } from "express";
import ResponseError from "../ResponseError";
import { Team } from "@prisma/client";

type TTeamBody = {
  name: string;
};

export interface ITeamHandlers {
  getAll: RequestHandler<null, Team[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Team | ResponseError, null>;
  create: RequestHandler<null, Team | ResponseError, TTeamBody>;
  update: RequestHandler<{ id: string }, Team | ResponseError, TTeamBody>;
  delete: RequestHandler<{ id: string }, Team | ResponseError, null>;
}
