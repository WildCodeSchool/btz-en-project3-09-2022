/* eslint-disable no-console */

import { ImageHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const updateImage: ImageHandlers["update"] = async (req, res) => {
  const { id } = req.params;
  const { userId, postId, name, url } = req.body;
  try {
    const updateImage = await prisma.image.update({
      where: {
        id: id,
      },
      data: {
        userId,
        postId,
        name,
        url,
      },
    });
    res.status(200).json(updateImage);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateImage;
