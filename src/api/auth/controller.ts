import IAuthController from "./interface";
import signUp from "./handlers/signUp";
import signIn from "./handlers/signIn";
import me from "./handlers/me";

const controller: IAuthController = { signUp, signIn, me };

export default controller;
