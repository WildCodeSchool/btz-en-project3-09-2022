/* eslint-disable no-console */
import { IUserHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const deleteOneUser: IUserHandlers["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await prisma.user.delete({
      where: {
        id,
      },
    });
    const { password: removedPassword, ...userWithoutPassword } = deletedUser;
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteOneUser;
