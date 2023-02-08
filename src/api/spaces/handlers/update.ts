/* eslint-disable no-console */

import { SpaceHandlers } from "./../interface";
import prisma from "../../../../prisma/client";
import asyncFormParse from "../../../middlewares/upload/formParse";
import { uploadImage } from "../../../middlewares/upload/uploadCloudinary";

const updateSpace: SpaceHandlers["update"] = async (req, res) => {
  const { id } = req.params;
  const { fields, files } = await asyncFormParse(req);
  const { name, siteId, ownerId, description, isDisabled } = fields;

  try {
    const dataImage =
      files.spaceImage &&
      (await uploadImage(files.spaceImage[0].path, "/spaceImages"));

    const updateSpace = await prisma.space.update({
      where: {
        id: id,
      },
      data: {
        name: name ? name[0] : undefined,
        siteId: siteId ? siteId[0] : undefined,
        imageUrl: dataImage ? dataImage.securePath : undefined,
        ownerId: ownerId ? ownerId[0] : undefined,
        description: description ? description[0] : undefined,
        isDisabled: isDisabled ? isDisabled[0] : undefined,
      },
    });
    res.status(200).json(updateSpace);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateSpace;
