/* eslint-disable no-console */

import { CategoryHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const deleteCategory: CategoryHandlers["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    if (!req.user || req.user.role !== "SUPER_ADMIN") {
      return res
        .status(403)
        .json({ message: "Forbidden, you don't have the right access" });
    }
    const deleteCategory = await prisma.category.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json(deleteCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteCategory;
