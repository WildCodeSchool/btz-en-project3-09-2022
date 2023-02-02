/* eslint-disable no-console */

import { ICommentHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getAllComments: ICommentHandlers["getAll"] = async (req, res) => {
  const { postId, author } = req.query;
  const { id: userId } = req.user;
  try {
    const comments = await prisma.comment.findMany({
      where: {
        post: {
          category: { members: { some: { id: { equals: userId } } } },
        },
        postId: {
          equals: postId,
        },
      },
      include: {
        author: author === "true" ? true : false,
      },
      orderBy: { createdAt: "asc" },
    });
    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllComments;
