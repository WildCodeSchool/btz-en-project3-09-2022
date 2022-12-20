import prisma from "../../../../prisma/client";
import { ITeamHandlers } from "./../interface";

const getOneTeam: ITeamHandlers["getOne"] = async (req, res) => {
  const { id } = req.params;

  try {
    const Oneteam = await prisma.team.findUniqueOrThrow({
      where: { id },
    });
    res.status(200).json(Oneteam);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Can't find this team");
    res.status(500).json({ message: error });
  }
};

export default getOneTeam;
