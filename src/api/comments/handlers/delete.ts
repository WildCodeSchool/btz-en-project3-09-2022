/* eslint-disable no-console */

import { ICommentHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const deleteComment: ICommentHandlers["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.user || req.user.role !== "SUPER_ADMIN") {
      return res
        .status(403)
        .json({ message: "Forbidden, you don't have the right access" });
    }
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
