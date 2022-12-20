import prisma from "../../../../prisma/client";
import IPostHandler from "../interface";

const createPost: IPostHandler["create"] = async (req, res) => {
  const { authorId, categoryId, content, title } = req.body;

  try {
    const newPost = await prisma.post.create({
      data: {
        content,
        title,
        authorId,
        categoryId,
      },
    });
    res.status(200).json(newPost);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Cannot create a new post");
    res.status(500).json({ message: error });
  }
};

export default createPost;
