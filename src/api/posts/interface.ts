import { Post } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../ResponseError";

type TPostCreate = {
  title: string;
  content: string;
  categoryId: string;
  authorId: string;
};

export default interface IPostHandler {
  getAll: RequestHandler<null, Post[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Post | ResponseError, null>;
  create: RequestHandler<null, Post | ResponseError, TPostCreate>;
  update: RequestHandler<{ id: string }, Post | ResponseError, TPostCreate>;
  delete: RequestHandler<{ id: string }, Post | ResponseError, null>;
}
