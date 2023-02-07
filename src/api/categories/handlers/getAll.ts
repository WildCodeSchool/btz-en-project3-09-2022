/* eslint-disable no-console */

import { CategoryHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const getAllCategories: CategoryHandlers["getAll"] = async (req, res) => {
  const { id, role } = req.user;
  const { userID } = req.query;

  if (role === "ADMIN" || role === "SUPER_ADMIN") {
    try {
      const categories = await prisma.category.findMany({
        where: { members: { some: { id: { equals: userID } } } },
        orderBy: { name: "asc" },
      });
      return res.status(200).json(categories);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }

  if (role === "USER") {
    try {
      const categories = await prisma.category.findMany({
        where: {
          AND: [
            { members: { some: { id: { equals: id } } } },
            { members: { some: { id: { equals: userID } } } },
            { isDisabled: false },
          ],
        },
        orderBy: { name: "asc" },
      });
      res.status(200).json(categories);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }
};

export default getAllCategories;
