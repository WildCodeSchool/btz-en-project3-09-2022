/* eslint-disable no-console */
import prisma from "../../../../prisma/client";
import { SpaceHandlers } from "./../interface";

const addUser: SpaceHandlers["addUser"] = async (req, res) => {
  const { id } = req.params;
  const usersToConnect = req.body;

  try {
    const updatedSpace = await prisma.space.update({
      where: {
        id,
      },
      data: {
        members: {
          connect: usersToConnect.map((userId) => ({ id: userId })),
        },
        // categories: {
        //   updateMany: {
        //     where: { isGeneral: true },
        //     data: {
        //       members: {
        //         connect: usersToConnect.map((userId) => ({ id: userId })),
        //       },
        //     },
        //   },
        // },
      },
    });
    res.status(200).json(updatedSpace);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default addUser;
