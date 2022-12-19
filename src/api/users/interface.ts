import { User } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../ResponseError";

// type TAuthorBodyCreate = {
//   imageUrl: string;
//   firstname: string;
//   lastname: string;
//   workLocation: string;
//   birthday: Date;
//   email: string;
//   hashedPassword: string;
//   isDisabled: boolean;
// };

export interface IUserHandlers {
  getAll: RequestHandler<null, User[] | ResponseError, null>;
}
