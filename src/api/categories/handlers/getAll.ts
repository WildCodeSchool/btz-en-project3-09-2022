/* eslint-disable no-console */

import { CategoryHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const getAllCategories: CategoryHandlers["getAll"] = async (req, res) => {
  const { id, role } = req.user;
  const { userId } = req.query;

  if (role === "ADMIN" || role === "SUPER_ADMIN") {
    try {
      const categories = await prisma.category.findMany();
      return res.status(200).json(categories);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }

  if (role === "USER" && typeof userId === "string") {
    try {
      const categories = await prisma.category.findMany({
        where: {
          members: {
            some: {
              id: { equals: userId },
            },
          },
        },
      });
      res.status(200).json(categories);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }

  if (role === "USER" && typeof userId !== "string") {
    try {
      const categories = await prisma.category.findMany({
        where: {
          members: {
            some: {
              id: id,
            },
          },
        },
      });
      res.status(200).json(categories);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }
};

export default getAllCategories;
