import { Notification } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../ResponseError";

type TNotificationCreate = {
  type: string;
  content: string;
  userId: string;
  link: string;
};

export default interface INotificationHandler {
  getAll: RequestHandler<null, Notification[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Notification | ResponseError, null>;
  create: RequestHandler<
    null,
    Notification | ResponseError,
    TNotificationCreate
  >;
  update: RequestHandler<
    { id: string },
    Notification | ResponseError,
    TNotificationCreate
  >;
  delete: RequestHandler<{ id: string }, Notification | ResponseError, null>;
}
