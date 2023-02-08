import { TUserWithoutPassword } from "../../src/api/users/interface";

declare global {
  namespace Express {
    export interface Request {
      user: TUserWithoutPassword;
    }
  }
}
