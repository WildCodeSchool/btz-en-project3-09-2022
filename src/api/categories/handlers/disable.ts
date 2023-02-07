/* eslint-disable no-console */
import prisma from "../../../../prisma/client";
import { CategoryHandlers } from "./../interface";

const disable: CategoryHandlers["disable"] = async (req, res) => {
  const { id } = req.params;

  try {
    {
      const disabledCategory = await prisma.category.update({
        where: {
          id,
        },
        data: {
          isDisabled: true,
        },
        include: {
          posts: true,
        },
      });

      await prisma.post.updateMany({
        where: {
          categoryId: id,
        },
        data: { isDisabled: true },
      });

      res.status(200).json(disabledCategory);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default disable;
