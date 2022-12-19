/* eslint-disable no-console */
import { ICommentHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createComment: ICommentHandlers["create"] = async (req, res) => {
  try {
    const { authorId, content, postId } = req.body;
    const newComment = await prisma.comment.create({
      data: { content, authorId, postId },
    });
    res.status(200).json(newComment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createComment;
