import prisma from "../../../../prisma/client";
import { CategoryHandlers } from "./../interface";

const addUser: CategoryHandlers["addUser"] = async (req, res) => {
  const { id } = req.params;
  const usersToConnect = req.body;

  try {
    const updatedCategory = await prisma.category.update({
      where: {
        id,
      },
      data: {
        members: {
          connect: usersToConnect.map((userId) => ({ id: userId })),
        },
      },
    });

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default addUser;
