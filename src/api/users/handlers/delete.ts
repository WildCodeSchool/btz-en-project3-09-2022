/* eslint-disable no-console */
import { IUserHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const deleteOneUser: IUserHandlers["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.user || req.user.role !== "SUPER_ADMIN") {
      return res
        .status(403)
        .json({ message: "Forbidden, you don't have the right access" });
    }
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
