/* eslint-disable no-console */

import { SpaceHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const getOneSpace: SpaceHandlers["getOne"] = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const { categories, owner } = req.query;
  try {
    const getSpace = await prisma.space.findUniqueOrThrow({
      where: {
        id: id,
      },
      include: {
        categories:
          categories === "true"
            ? {
                where: { members: { some: { id: userId } }, isDisabled: false },
                orderBy: { name: "asc" },
              }
            : false,
        owner: owner === "true" ? true : false,
      },
    });
    res.status(200).json(getSpace);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneSpace;
