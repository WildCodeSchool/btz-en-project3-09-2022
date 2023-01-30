import { Notification } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../ResponseError";

type TNotificationBody = Omit<Notification, "id">;

export default interface INotificationHandler {
  getAll: RequestHandler<null, Notification[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Notification | ResponseError, null>;
  create: RequestHandler<null, Notification | ResponseError, TNotificationBody>;
  update: RequestHandler<
    { id: string },
    Notification | ResponseError,
    TNotificationBody
  >;
  delete: RequestHandler<{ id: string }, Notification | ResponseError, null>;
}
