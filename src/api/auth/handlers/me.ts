import jwt from "jsonwebtoken";
import IAuthController from "../interface";
import getSecretKey from "../../../utils/auth";

const handler: IAuthController["me"] = (req, res) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(500).json({ message: "No auth token provided" });
  }

  const secret = getSecretKey();

  const user = jwt.verify(token, secret);

  if (typeof user === "string") {
    throw new Error(user);
  }

  return res.status(200).json(user);
};

export default handler;
