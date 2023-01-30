import prisma from "../../../../prisma/client";
import INotificationHandler from "../interface";

const getAllNotifications: INotificationHandler["getAll"] = async (
  req,
  res
) => {
  try {
    const allNotifications = await prisma.notification.findMany();

    res.status(200).json(allNotifications);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Cannot get all Notifications");
    res.status(500).json({ message: error });
  }
};

export default getAllNotifications;
