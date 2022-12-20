import prisma from "../../../../prisma/client";
import INotificationHandler from "../interface";

const getOneNotification: INotificationHandler["getOne"] = async (req, res) => {
  const { id } = req.params;

  try {
    const oneNotification = await prisma.notification.findUniqueOrThrow({
      where: { id },
    });
    res.status(200).json(oneNotification);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Cannot get this notification");
    res.status(500).json({ message: error });
  }
};

export default getOneNotification;
