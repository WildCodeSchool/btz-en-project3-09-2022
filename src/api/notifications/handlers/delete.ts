import INotificationHandler from "../interface";
import prisma from "../../../../prisma/client";

const deleteNotification: INotificationHandler["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    if (!req.user || req.user.role !== "SUPER_ADMIN") {
      return res
        .status(403)
        .json({ message: "Forbidden, you don't have the right access" });
    }
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
