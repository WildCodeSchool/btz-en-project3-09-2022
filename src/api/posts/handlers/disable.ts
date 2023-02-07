/* eslint-disable no-console */
import prisma from "../../../../prisma/client";
import IPostHandler from "./../interface";

const disable: IPostHandler["disable"] = async (req, res) => {
  const { id } = req.params;

  try {
    {
      const disabledPost = await prisma.post.update({
        where: {
          id,
        },
        data: {
          isDisabled: true,
        },
        include: {
          comments: true,
        },
      });

      await prisma.comment.updateMany({
        where: {
          postId: id,
        },
        data: { isDisabled: true },
      });

      res.status(200).json(disabledPost);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default disable;
