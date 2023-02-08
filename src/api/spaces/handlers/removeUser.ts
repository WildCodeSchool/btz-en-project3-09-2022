/* eslint-disable no-console */
import prisma from "../../../../prisma/client";
import { SpaceHandlers } from "../interface";

const removeUser: SpaceHandlers["removeUser"] = async (req, res) => {
  const { id } = req.params;
  const usersToDisconnect = req.body;

  try {
    const updatedSpace = await prisma.space.update({
      where: {
        id,
      },
      data: {
        members: {
          disconnect: usersToDisconnect.map((userId) => ({ id: userId })),
        },
      },
      include: {
        categories: true,
      },
    });

    const generalCategory = updatedSpace.categories.find(
      (cat) => cat.name === "Général"
    );

    await prisma.category.update({
      where: {
        id: generalCategory?.id,
      },
      data: {
        members: {
          disconnect: usersToDisconnect.map((userId) => ({ id: userId })),
        },
      },
    });
    res.status(200).json(updatedSpace);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default removeUser;
