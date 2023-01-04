/* eslint-disable no-console */
import { IUserHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const updateUser: IUserHandlers["update"] = async (req, res) => {
  try {
    const {
      birthday,
      email,
      firstname,
      password,
      imageUrl,
      isDisabled,
      lastname,
      teamId,
      workLocation,
    } = req.body;
    const { id } = req.params;
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        birthday,
        email,
        firstname,
        password,
        imageUrl,
        isDisabled,
        lastname,
        teamId,
        workLocation,
      },
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateUser;
