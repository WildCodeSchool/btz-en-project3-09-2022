/* eslint-disable no-console */

import { CategoryHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const deleteCategory: CategoryHandlers["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
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
