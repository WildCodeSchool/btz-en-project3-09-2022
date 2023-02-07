/* eslint-disable no-console */
import prisma from "../../../../prisma/client";
import { SpaceHandlers } from "./../interface";

const disable: SpaceHandlers["disable"] = async (req, res) => {
  const { id } = req.params;

  try {
    {
      const disabledSpace = await prisma.space.update({
        where: {
          id,
        },
        data: {
          isDisabled: true,
        },
        include: {
          categories: true,
        },
      });

      await prisma.category.updateMany({
        where: {
          spaceId: id,
        },
        data: { isDisabled: true },
      });

      await prisma.post.updateMany({
        where: {
          category: { spaceId: id },
        },
        data: { isDisabled: true },
      });

      res.status(200).json(disabledSpace);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default disable;
