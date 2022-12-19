import { User } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../ResponseError";

type TAuthorBodyCreate = {
  imageUrl: string;
  firstname: string;
  lastname: string;
  workLocation: string;
  birthday: Date;
  email: string;
  hashedPassword: string;
  teamId: string;
  isDisabled: boolean;
};

export interface IUserHandlers {
  getAll: RequestHandler<null, User[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, User | ResponseError, null>;
  create: RequestHandler<null, User | ResponseError, TAuthorBodyCreate>;
  update: RequestHandler<
    { id: string },
    User | ResponseError,
    TAuthorBodyCreate
  >;
}
