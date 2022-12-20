import prisma from "../../../../prisma/client";
import IPostHandler from "../interface";

const updatePost: IPostHandler["update"] = async (req, res) => {
  const { id } = req.params;
  const { authorId, categoryId, content, title } = req.body;
  try {
    const updateAPost = await prisma.post.update({
      where: {
        id,
      },
      data: {
        authorId,
        categoryId,
        content,
        title,
      },
    });
    res.status(200).json(updateAPost);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Cannot update this post");
    res.status(500).json({ message: error });
  }
};

export default updatePost;
