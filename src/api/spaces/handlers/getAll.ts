/* eslint-disable no-console */
import { SpaceHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const getAllSpaces: SpaceHandlers["getAll"] = async (req, res) => {
  if (req.user.role === "ADMIN" || req.user.role === "SUPER_ADMIN") {
    try {
      const spaces = await prisma.space.findMany();
      res.status(200).json(spaces);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }
  if (req.user.role === "USER") {
    try {
      const spaces = await prisma.space.findMany({
        where: {
          members: {
            some: {
              id: req.user.id,
            },
          },
        },
      });
      res.status(200).json(spaces);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }
};

export default getAllSpaces;
