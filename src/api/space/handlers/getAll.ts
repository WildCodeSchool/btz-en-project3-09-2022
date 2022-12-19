import { SpaceHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const getAllSpaces: SpaceHandlers["getAll"] = async (req, res) => {
  try {
    const spaces = await prisma.space.findMany();
    res.status(200).json(spaces);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllSpaces;
