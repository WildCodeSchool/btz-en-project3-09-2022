/* eslint-disable no-console */

import { IUserHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createUser: IUserHandlers["create"] = async (req, res) => {
  try {
    const {
      birthday,
      email,
      firstname,
      hashedPassword,
      imageUrl,
      lastname,
      workLocation,
      isDisabled,
      teamId,
    } = req.body;
    const newUser = await prisma.user.create({
      data: {
        birthday,
        email,
        firstname,
        hashedPassword,
        imageUrl,
        lastname,
        workLocation,
        isDisabled,
        teamId,
      },
    });
    res.status(200).json(newUser);
  } catch (error) {
    console.log(500);
    res.status(500).json({ message: error });
  }
};

export default createUser;
