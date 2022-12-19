/* eslint-disable no-console */
import { ICommentHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const updateComment: ICommentHandlers["update"] = async (req, res) => {
  try {
    const { id } = req.params;
    const { authorId, content, postId } = req.body;
    const updatedComment = await prisma.comment.update({
      where: {
        id,
      },
      data: {
        authorId,
        content,
        postId,
      },
    });
    res.status(200).json(updatedComment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateComment;
