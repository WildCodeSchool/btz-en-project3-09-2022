import ResponseError from "./../ResponseError";
import { User } from "@prisma/client";
import { RequestHandler } from "express";
import { JwtPayload } from "jsonwebtoken";

type TUserWithoutPassword = Omit<User, "password">;
type TUserRegisterBody = Pick<
  User,
  | "email"
  | "password"
  | "birthday"
  | "firstname"
  | "lastname"
  | "workLocation"
  | "teamId"
>;

type TLoginBody = {
  email: string;
  password: string;
};

interface IAuthController {
  signUp: RequestHandler<
    null,
    TUserWithoutPassword | ResponseError,
    TUserRegisterBody,
    null
  >;
  signIn: RequestHandler<
    null,
    TUserWithoutPassword | ResponseError,
    TLoginBody,
    null
  >;
  me: RequestHandler<null, JwtPayload | ResponseError, null, null>;
}

export default IAuthController;
