/* eslint-disable no-console */

import { SpaceHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const updateSpace: SpaceHandlers["update"] = async (req, res) => {
  const { id } = req.params;
  const { name, imageUrl, siteId, ownerId } = req.body;
  try {
    const updateSpace = await prisma.space.update({
      where: {
        id: id,
      },
      data: {
        name,
        imageUrl,
        siteId,
        ownerId,
      },
    });
    res.status(200).json(updateSpace);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateSpace;
