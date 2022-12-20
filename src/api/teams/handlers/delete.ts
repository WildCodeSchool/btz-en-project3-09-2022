import prisma from "../../../../prisma/client";
import { ITeamHandlers } from "./../interface";

const deleteTeam: ITeamHandlers["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteATeam = await prisma.team.delete({
      where: { id },
    });
    res.status(200).json(deleteATeam);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Can't delete this team");
    res.status(500).json({ message: error });
  }
};

export default deleteTeam;
