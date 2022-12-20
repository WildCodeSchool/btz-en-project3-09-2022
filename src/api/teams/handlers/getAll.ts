import prisma from "../../../../prisma/client";
import { ITeamHandlers } from "./../interface";

const getAllTeams: ITeamHandlers["getAll"] = async (req, res) => {
  try {
    const teams = await prisma.team.findMany();

    res.status(200).json(teams);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Can't get all the teams");
    res.status(500).json({ message: error });
  }
};

export default getAllTeams;
