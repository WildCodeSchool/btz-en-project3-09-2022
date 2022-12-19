/* eslint-disable no-console */
import { ISiteHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const deleteOneSite: ISiteHandlers["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSite = await prisma.site.delete({
      where: { id },
    });
    res.status(200).json(deletedSite);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
};

export default deleteOneSite;
