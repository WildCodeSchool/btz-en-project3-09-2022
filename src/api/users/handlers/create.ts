/* eslint-disable no-console */

import argon2 from "argon2";
import { IUserHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createUser: IUserHandlers["create"] = async (req, res) => {
  try {
    const {
      birthday,
      email,
      firstname,
      password,
      imageUrl,
      lastname,
      workLocation,
      isDisabled,
      teamId,
    } = req.body;

    const hashingOptions = {
      type: argon2.argon2id,
      memoryCost: 2 ** 16,
      timeCost: 5,
      parallelism: 1,
    };
    const hashedPassword = await argon2.hash(password, hashingOptions);

    const newUser = await prisma.user.create({
      data: {
        birthday,
        email,
        firstname,
        password: hashedPassword,
        imageUrl,
        lastname,
        workLocation,
        isDisabled,
        teamId,
      },
    });
    const { password: removedPassword, ...userWithoutPassword } = newUser;

    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.log(500);
    res.status(500).json({ message: error });
  }
};

export default createUser;
