/* eslint-disable no-console */
import prisma from "../../../../prisma/client";
import { ICommentHandlers } from "./../interface";

const undisable: ICommentHandlers["undisable"] = async (req, res) => {
  const { id } = req.params;

  try {
    {
      const disabledComment = await prisma.comment.update({
        where: {
          id,
        },
        data: {
          isDisabled: false,
        },
      });

      res.status(200).json(disabledComment);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default undisable;
