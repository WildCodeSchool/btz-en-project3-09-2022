/* eslint-disable no-console */

import { ISiteHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createSite: ISiteHandlers["create"] = async (req, res) => {
  try {
    const { name, imageUrl, userId } = req.body;
    const newSite = await prisma.site.create({
      data: {
        name,
        userId,
        imageUrl,
      },
    });
    res.status(200).json(newSite);
  } catch (error) {
    console.log(500);
    res.status(500).json({ message: error });
  }
};
export default createSite;
