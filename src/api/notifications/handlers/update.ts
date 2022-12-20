import prisma from "../../../../prisma/client";
import INotificationHandler from "../interface";

const updateNotification: INotificationHandler["update"] = async (req, res) => {
  const { id } = req.params;
  const { content, link, type, userId } = req.body;
  try {
    const updateANotification = await prisma.notification.update({
      where: {
        id,
      },
      data: {
        content,
        link,
        type,
        userId,
      },
    });
    res.status(200).json(updateANotification);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Cannot update this notification");
    res.status(500).json({ message: error });
  }
};

export default updateNotification;
