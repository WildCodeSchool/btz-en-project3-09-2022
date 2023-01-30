/* eslint-disable no-console */

import { ISiteHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const updateSite: ISiteHandlers["update"] = async (req, res) => {
  try {
    const { imageUrl, name, userId } = req.body;
    const { id } = req.params;
    const updatedSite = await prisma.site.update({
      where: {
        id,
      },
      data: {
        imageUrl,
        name,
        userId,
      },
    });
    res.status(200).json(updatedSite);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateSite;
