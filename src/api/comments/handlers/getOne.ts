/* eslint-disable no-console */

import { ICommentHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getOneComment: ICommentHandlers["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await prisma.comment.findUniqueOrThrow({
      where: {
        id,
      },
    });
    res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneComment;
