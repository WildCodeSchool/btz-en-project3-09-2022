/* eslint-disable no-console */

import { CategoryHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const getOneCategory: CategoryHandlers["getOne"] = async (req, res) => {
  const { id } = req.params;
  const { space } = req.query;

  try {
    const getCategory = await prisma.category.findUniqueOrThrow({
      where: {
        id: id,
      },
      include: { space: space === "true" ? true : false },
    });
    res.status(200).json(getCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneCategory;
