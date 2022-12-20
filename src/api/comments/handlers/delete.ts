/* eslint-disable no-console */

import { ICommentHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const deleteComment: ICommentHandlers["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedComment = await prisma.comment.delete({
      where: {
        id,
      },
    });
    res.status(200).json(deletedComment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteComment;
