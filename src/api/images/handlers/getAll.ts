/* eslint-disable no-console */

import { ImageHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const getAllImages: ImageHandlers["getAll"] = async (req, res) => {
  const { role } = req.user;

  if (role === "ADMIN" || role === "SUPER_ADMIN") {
    try {
      const images = await prisma.image.findMany();
      res.status(200).json(images);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }

  if (role === "USER") {
    try {
      const images = await prisma.image.findMany({
        where: { isDisabled: false },
      });
      res.status(200).json(images);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }
};

export default getAllImages;
