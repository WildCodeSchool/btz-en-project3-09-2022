/* eslint-disable no-console */
import { IUserHandlers } from "../interface";
import prisma from "../../../../prisma/client";
import asyncFormParse from "../../../middlewares/upload/formParse";
import { uploadImage } from "../../../middlewares/upload/uploadCloudinary";

const updateUser: IUserHandlers["update"] = async (req, res) => {
  const { id } = req.params;
  const { role, id: userId } = req.user;
  const { fields, files } = await asyncFormParse(req);
  const {
    firstname,
    lastname,
    email,
    birthday,
    teamId,
    workLocation,
    isDisabled,
    showBirthday,
    showEmail,
  } = fields;

  if (role === "ADMIN" || role === "SUPER_ADMIN") {
    try {
      const dataProfilePicture =
        files.profileImage &&
        (await uploadImage(files.profileImage[0].path, "/profileImages"));

      const updatedUser = await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          firstname: firstname ? firstname[0] : undefined,
          lastname: lastname ? lastname[0] : undefined,
          email: email ? email[0] : undefined,
          imageUrl: dataProfilePicture
            ? dataProfilePicture.securePath
            : undefined,
          birthday: birthday ? birthday[0] : undefined,
          teamId: teamId ? teamId[0] : undefined,
          workLocation: workLocation ? workLocation[0] : undefined,
          isDisabled: isDisabled
            ? (isDisabled[0] === "true" && true) ||
              (isDisabled[0] === "false" && false)
            : undefined,
          showBirthday: showBirthday
            ? (showBirthday[0] === "true" && true) ||
              (showBirthday[0] === "false" && false)
            : undefined,
          showEmail: showBirthday
            ? (showBirthday[0] === "true" && true) ||
              (showBirthday[0] === "false" && false)
            : undefined,
        },
      });

      const { password: removedPassword, ...userWithoutPassword } = updatedUser;
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }

  if (role === "USER") {
    try {
      const dataProfilePicture =
        files.profileImage &&
        (await uploadImage(files.profileImage[0].path, "/profileImages"));

      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          imageUrl: dataProfilePicture
            ? dataProfilePicture.securePath
            : undefined,
          showBirthday: showBirthday
            ? (showBirthday[0] === "true" && true) ||
              (showBirthday[0] === "false" && false)
            : undefined,

          showEmail: showEmail
            ? (showEmail[0] === "true" && true) ||
              (showEmail[0] === "false" && false)
            : undefined,
        },
      });
      const { password: removedPassword, ...userWithoutPassword } = updatedUser;
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }
};

export default updateUser;
