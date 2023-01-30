/* eslint-disable no-console */
import { ImageHandlers } from "./../interface";
import prisma from "../../../../prisma/client";
import { uploadImage } from "../../../middlewares/upload/uploadCloudinary";
import asyncFormParse from "../../../middlewares/upload/formParse";

const createImage: ImageHandlers["create"] = async (req, res) => {
  const { id: userIdAuth } = req.user;
  const { fields, files } = await asyncFormParse(req);
  const postId = fields.postId[0];

  try {
    const dataImage = await uploadImage(files.postImage[0].path, "/postImages");
    if (dataImage) {
      const createImage = await prisma.image.create({
        data: {
          userId: userIdAuth,
          postId,
          name: dataImage.name,
          url: dataImage.securePath,
        },
      });
      res.status(200).json(createImage);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createImage;
