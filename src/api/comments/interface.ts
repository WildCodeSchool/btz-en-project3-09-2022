import { Comment } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../ResponseError";

type TCommentBodyCreate = {
  content: string;
  postId: string;
  authorId: string;
};

export interface ICommentHandlers {
  getAll: RequestHandler<null, Comment[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Comment | ResponseError, null>;
  create: RequestHandler<null, Comment | ResponseError, TCommentBodyCreate>;
  update: RequestHandler<
    { id: string },
    Comment | ResponseError,
    TCommentBodyCreate
  >;
}
