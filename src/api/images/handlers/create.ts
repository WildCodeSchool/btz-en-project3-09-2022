/* eslint-disable no-console */

import { ImageHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const createImage: ImageHandlers["create"] = async (req, res) => {
  const { userId, postId, name, url } = req.body;
  try {
    const createImage = await prisma.image.create({
      data: {
        userId,
        postId,
        name,
        url,
      },
    });
    res.status(200).json(createImage);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createImage;
