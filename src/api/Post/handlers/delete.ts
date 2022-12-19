import IPostHandler from "../interface";
import prisma from "../../../../prisma/client";

const deletePost: IPostHandler["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const postDeleted = await prisma.post.delete({
      where: { id },
    });
    res.status(200).json(postDeleted);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Cannot delete the post");
    res.status(500).json({ message: error });
  }
};

export default deletePost;
