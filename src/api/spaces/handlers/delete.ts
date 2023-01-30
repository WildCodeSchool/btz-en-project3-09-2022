/* eslint-disable no-console */

import { SpaceHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const deleteSpace: SpaceHandlers["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteSpace = await prisma.space.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json(deleteSpace);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteSpace;
