import prisma from "../../../../prisma/client";
import IPostHandler from "../interface";

const getOnePost: IPostHandler["getOne"] = async (req, res) => {
  const { id } = req.params;
  const { category, limit, image } = req.query;

  try {
    const onePost = await prisma.post.findUniqueOrThrow({
      where: { id },
    });
    res.status(200).json(onePost);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Cannot get this post");
    res.status(500).json({ message: error });
  }
};

export default getOnePost;
