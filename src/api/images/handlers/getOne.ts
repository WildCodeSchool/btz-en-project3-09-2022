/* eslint-disable no-console */

import { ImageHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const getOneImage: ImageHandlers["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const getImage = await prisma.image.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
    res.status(200).json(getImage);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneImage;
