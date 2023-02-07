import prisma from "../../../../prisma/client";
import { ITeamHandlers } from "./../interface";

const deleteTeam: ITeamHandlers["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    if (!req.user || req.user.role !== "SUPER_ADMIN") {
      return res
        .status(403)
        .json({ message: "Forbidden, you don't have the right access" });
    }
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
