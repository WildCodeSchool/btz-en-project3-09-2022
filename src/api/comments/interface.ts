import { Comment } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../ResponseError";

type TCommentBody = Omit<Comment, "id" | "createdAt" | "updatedAt">;

type QueryParam = {
  postId?: string;
};

export interface ICommentHandlers {
  getAll: RequestHandler<null, Comment[] | ResponseError, null, QueryParam>;
  getOne: RequestHandler<{ id: string }, Comment | ResponseError, null>;
  create: RequestHandler<null, Comment | ResponseError, TCommentBody>;
  update: RequestHandler<{ id: string }, Comment | ResponseError, TCommentBody>;
  delete: RequestHandler<{ id: string }, Comment | ResponseError, null>;
}
