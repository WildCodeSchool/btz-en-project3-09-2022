/* eslint-disable no-console */

import { ImageHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const deleteImage: ImageHandlers["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteImage = await prisma.image.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json(deleteImage);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteImage;
