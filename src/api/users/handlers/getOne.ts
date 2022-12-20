/* eslint-disable no-console */
import { IUserHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getOneUser: IUserHandlers["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneUser;
