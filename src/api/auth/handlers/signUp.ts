import jwt from "jsonwebtoken";
import argon2 from "argon2";
import IAuthController from "../interface";
import prisma from "../../../../prisma/client";
import getSecretKey from "../../../utils/auth";

const signUp: IAuthController["signUp"] = async (req, res) => {
  const {
    email,
    password,
    birthday,
    firstname,
    lastname,
    workLocation,
    teamId,
  } = req.body;
  try {
    const hashingOptions = {
      type: argon2.argon2id,
      memoryCost: 2 ** 16,
      timeCost: 5,
      parallelism: 1,
    };
    const hashedPassword = await argon2.hash(password, hashingOptions);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        birthday,
        firstname,
        lastname,
        workLocation,
        team: {
          connect: {
            id: teamId,
          },
        },
      },
    });

    const secret = getSecretKey();

    const { password: removedPassword, ...userWithoutPassword } = newUser;

    const token = jwt.sign(userWithoutPassword, secret, {
      expiresIn: "10m",
    });

    res.setHeader("Authorization", `Bearer ${token}`);

    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default signUp;
