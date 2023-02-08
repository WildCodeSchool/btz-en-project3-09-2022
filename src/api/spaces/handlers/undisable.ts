/* eslint-disable no-console */
import prisma from "../../../../prisma/client";
import { SpaceHandlers } from "../interface";

const undisable: SpaceHandlers["undisable"] = async (req, res) => {
  const { id } = req.params;

  try {
    {
      const undisabledSpace = await prisma.space.update({
        where: {
          id,
        },
        data: {
          isDisabled: false,
        },
        include: {
          categories: true,
        },
      });

      await prisma.category.updateMany({
        where: {
          spaceId: id,
        },
        data: { isDisabled: false },
      });

      await prisma.post.updateMany({
        where: {
          category: { spaceId: id },
        },
        data: { isDisabled: false },
      });

      res.status(200).json(undisabledSpace);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default undisable;
