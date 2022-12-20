/* eslint-disable no-console */

import { CategoryHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const createCategory: CategoryHandlers["create"] = async (req, res) => {
  const { name, imageUrl, spaceId, ownerId } = req.body;
  try {
    const createCategory = await prisma.category.create({
      data: {
        name,
        imageUrl,
        spaceId,
        ownerId,
      },
    });
    res.status(200).json(createCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createCategory;
