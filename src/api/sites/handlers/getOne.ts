/* eslint-disable no-console */
import { ISiteHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getOneSite: ISiteHandlers["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const site = await prisma.site.findUniqueOrThrow({
      where: {
        id,
      },
    });
    res.status(200).json(site);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneSite;
