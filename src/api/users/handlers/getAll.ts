/* eslint-disable no-console */
import { IUserHandlers } from "../interface";
import prisma from "../../../../prisma/client";

function exclude<User, Key extends keyof User>(
  user: User,
  keys: Key[]
): Omit<User, Key> {
  for (const key of keys) {
    delete user[key];
  }
  return user;
}

const getAllUsers: IUserHandlers["getAll"] = async (req, res) => {
  const { userExcluded, team, limit, spaceId, categoryId } = req.query;
  const limitParsed = parseInt(limit);
  const { role } = req.user;

  if (role === "ADMIN" || role === "SUPER_ADMIN") {
    try {
      const users = await prisma.user.findMany({
        where: {
          teamId: { contains: team },
          id: { not: userExcluded },
          inSpaces: { some: { id: { equals: spaceId } } },
          inCategories: { some: { id: { equals: categoryId } } },
        },
        take: limitParsed ? limitParsed : undefined,
        skip: 0,
        orderBy: [
          {
            lastname: "asc",
          },
        ],
      });
      users.map((user) => exclude(user, ["password"]));
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }

  if (role === "USER") {
    try {
      const users = await prisma.user.findMany({
        where: {
          teamId: { contains: team },
          id: { not: userExcluded },
          inSpaces: { some: { id: { equals: spaceId } } },
          inCategories: { some: { id: { equals: categoryId } } },
          isDisabled: false,
        },
        take: limitParsed ? limitParsed : undefined,
        skip: 0,
        orderBy: [
          {
            lastname: "asc",
          },
        ],
      });
      users.map((user) => exclude(user, ["password"]));
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }
};

export default getAllUsers;
