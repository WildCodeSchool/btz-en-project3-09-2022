import prisma from "../../../../prisma/client";
import { ITeamHandlers } from "./../interface";

const updateTeam: ITeamHandlers["update"] = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updateAteam = await prisma.team.update({
      where: { id },
      data: { name },
    });
    res.status(200).json(updateAteam);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Can't update this team");
    res.status(500).json({ message: error });
  }
};

export default updateTeam;
