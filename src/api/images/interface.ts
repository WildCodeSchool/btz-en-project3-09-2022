import { RequestHandler } from "express";
import { Image } from "@prisma/client";

type ResponseError = {
  message: string | unknown;
};

type ImageBodyCreate = Omit<Image, "id" | "createdAt" | "updatedAt">;
type ImageBodyUpdate = Omit<Image, "id" | "createdAt" | "updatedAt">;

export interface ImageHandlers {
  getAll: RequestHandler<null, Image[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Image | ResponseError, null>;
  create: RequestHandler<
    { id: string },
    Image | ResponseError,
    ImageBodyCreate
  >;
  update: RequestHandler<
    { id: string },
    Image | ResponseError,
    ImageBodyUpdate
  >;
  delete: RequestHandler;
}
