/* eslint-disable no-console */
import prisma from "../../../../prisma/client";
import { CategoryHandlers } from "./../interface";

const undisable: CategoryHandlers["undisable"] = async (req, res) => {
  const { id } = req.params;

  try {
    {
      const undisabledCategory = await prisma.category.update({
        where: {
          id,
        },
        data: {
          isDisabled: false,
        },
        include: {
          posts: true,
        },
      });

      await prisma.post.updateMany({
        where: {
          categoryId: id,
        },
        data: { isDisabled: false },
      });

      res.status(200).json(undisabledCategory);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default undisable;
