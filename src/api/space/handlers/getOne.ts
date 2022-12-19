/* eslint-disable no-console */

import { SpaceHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const getOneSpace: SpaceHandlers["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const getSpace = await prisma.space.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
    res.status(200).json(getSpace);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneSpace;
