/* eslint-disable no-console */
import prisma from "../../../../prisma/client";
import { CategoryHandlers } from "../interface";

const removeUser: CategoryHandlers["removeUser"] = async (req, res) => {
  const { id } = req.params;
  const usersToDisconnect = req.body;

  try {
    const updatedCategory = await prisma.category.update({
      where: { id },
      data: {
        members: {
          disconnect: usersToDisconnect.map((userId) => ({ id: userId })),
        },
      },
    });
    res.status(200).json(updatedCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default removeUser;
