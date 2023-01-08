import { Post } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../ResponseError";

type TPostBody = Omit<Post, "id" | "createdAt" | "updatedAt">;

export default interface IPostHandler {
  getAll: RequestHandler<null, Post[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Post | ResponseError, null>;
  create: RequestHandler<null, Post | ResponseError, TPostBody>;
  update: RequestHandler<{ id: string }, Post | ResponseError, TPostBody>;
  delete: RequestHandler<{ id: string }, Post | ResponseError, null>;
}
