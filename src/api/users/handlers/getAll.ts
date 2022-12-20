/* eslint-disable no-console */

import { IUserHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getAllUsers: IUserHandlers["getAll"] = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllUsers;
