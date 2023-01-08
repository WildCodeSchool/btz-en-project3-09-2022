import { Comment } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../ResponseError";

type TCommentBody = Omit<Comment, "id" | "createdAt" | "updatedAt">;

export interface ICommentHandlers {
  getAll: RequestHandler<null, Comment[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Comment | ResponseError, null>;
  create: RequestHandler<null, Comment | ResponseError, TCommentBody>;
  update: RequestHandler<{ id: string }, Comment | ResponseError, TCommentBody>;
  delete: RequestHandler<{ id: string }, Comment | ResponseError, null>;
}
