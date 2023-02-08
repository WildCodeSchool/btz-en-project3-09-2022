/* eslint-disable no-console */

import argon2 from "argon2";
import prisma from "../../../../prisma/client";
import IAuthController from "../interface";
import { sign } from "jsonwebtoken";
import getSecretKey from "../../../utils/auth";

const signIn: IAuthController["signIn"] = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const logUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!logUser) {
      return res.status(403).json({ message: "Invalid email" });
    }

    if (!(await argon2.verify(logUser.password, password))) {
      return res.status(403).json({ message: "Invalid password" });
    }

    const secret = getSecretKey();

    // password match
    const { password: _, ...userWithoutPassword } = logUser;
    const token = sign({ ...userWithoutPassword }, secret);
    res.setHeader("authorization", `Bearer ${token}`);

    return res.status(200).json({
      ...userWithoutPassword,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default signIn;
