import INotificationHandler from "../interface";
import prisma from "../../../../prisma/client";

const deleteNotification: INotificationHandler["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const NotificationDeleted = await prisma.notification.delete({
      where: { id },
    });
    res.status(200).json(NotificationDeleted);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Cannot delete the Notification");
    res.status(500).json({ message: error });
  }
};

export default deleteNotification;
