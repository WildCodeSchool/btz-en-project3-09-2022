import prisma from "../../../../prisma/client";
import IPostHandler from "../interface";

const getAllPosts: IPostHandler["getAll"] = async (req, res) => {
  const { categoryId, category, limit, image, spaceId, author } = req.query;
  const { id, role } = req.user;

  if (role === "ADMIN" || role === "SUPER_ADMIN") {
    try {
      const allPosts = await prisma.post.findMany({
        where: {
          categoryId: { contains: categoryId },
          category: {
            space: {
              id: {
                contains: spaceId,
              },
            },
          },
        },

        include: {
          images: image === "true" ? true : false,
          category: category === "true" ? true : false,
          author: author === "true" ? true : false,
        },
        take: limit ? parseInt(limit) : undefined,
        skip: 0,
        orderBy: { createdAt: "desc" },
      });

      res.status(200).json(allPosts);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log("Cannot get all posts");
      res.status(500).json({ message: error });
    }
  }

  if (role === "USER") {
    try {
      const allPosts = await prisma.post.findMany({
        where: {
          categoryId: { contains: categoryId },
          category: {
            AND: [
              {
                space: {
                  id: {
                    contains: spaceId,
                  },
                },
                members: {
                  some: {
                    id: id,
                  },
                },
              },
            ],
          },
          isDisabled: false,
        },

        include: {
          images: image === "true" ? true : false,
          category: category === "true" ? true : false,
          author: author === "true" ? true : false,
        },
        take: limit ? parseInt(limit) : undefined,
        skip: 0,
        orderBy: { createdAt: "desc" },
      });

      res.status(200).json(allPosts);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log("Cannot get all posts");
      res.status(500).json({ message: error });
    }
  }
};

export default getAllPosts;
