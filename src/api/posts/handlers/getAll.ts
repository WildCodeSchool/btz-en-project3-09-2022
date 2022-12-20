import prisma from "../../../../prisma/client";
import IPostHandler from "../interface";

const getAllPosts: IPostHandler["getAll"] = async (req, res) => {
  try {
    const allPosts = await prisma.post.findMany();

    res.status(200).json(allPosts);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Cannot get all posts");
    res.status(500).json({ message: error });
  }
};

export default getAllPosts;
