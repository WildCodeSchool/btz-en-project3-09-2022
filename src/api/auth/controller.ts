import IAuthController from "./interface";
import signUp from "./handlers/signUp";
import signIn from "./handlers/signIn";

const controller: IAuthController = { signUp, signIn };

export default controller;
