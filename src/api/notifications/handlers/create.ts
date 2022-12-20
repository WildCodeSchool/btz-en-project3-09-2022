import prisma from "../../../../prisma/client";
import INotificationHandler from "../interface";

const createNotification: INotificationHandler["create"] = async (req, res) => {
  const { link, userId, content, type } = req.body;

  try {
    const newNotification = await prisma.notification.create({
      data: {
        content,
        userId,
        link,
        type,
      },
    });
    res.status(200).json(newNotification);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Cannot create a new Notification");
    res.status(500).json({ message: error });
  }
};

export default createNotification;
