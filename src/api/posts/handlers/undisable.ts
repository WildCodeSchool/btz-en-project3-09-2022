/* eslint-disable no-console */
import prisma from "../../../../prisma/client";
import IPostHandler from "./../interface";

const undisable: IPostHandler["undisable"] = async (req, res) => {
  const { id } = req.params;

  try {
    {
      const undisabledPost = await prisma.post.update({
        where: {
          id,
        },
        data: {
          isDisabled: false,
        },
        include: {
          comments: true,
        },
      });

      await prisma.comment.updateMany({
        where: {
          postId: id,
        },
        data: { isDisabled: false },
      });

      res.status(200).json(undisabledPost);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default undisable;
