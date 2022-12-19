/* eslint-disable no-console */

import { ISiteHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getAllSites: ISiteHandlers["getAll"] = async (req, res) => {
  try {
    const sites = await prisma.site.findMany();
    res.status(200).json(sites);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllSites;
