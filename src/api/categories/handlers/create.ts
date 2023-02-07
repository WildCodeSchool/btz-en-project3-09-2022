/* eslint-disable no-console */
import { CategoryHandlers } from "./../interface";
import prisma from "../../../../prisma/client";
import { uploadImage } from "../../../middlewares/upload/uploadCloudinary";
import asyncFormParse from "../../../middlewares/upload/formParse";

const createCategory: CategoryHandlers["create"] = async (req, res) => {
  const { fields, files } = await asyncFormParse(req);
  const { name, description, spaceId, ownerId } = fields;

  if (
    name &&
    spaceId &&
    ownerId &&
    files &&
    name[0] &&
    spaceId[0] &&
    ownerId[0] &&
    files.categoryImage[0]
  ) {
    try {
      const dataImage = await uploadImage(
        files.categoryImage[0].path,
        "/categoryImages"
      );

      if (dataImage) {
        const createCategory = await prisma.category.create({
          data: {
            name: name[0],
            description: description[0],
            imageUrl: dataImage.securePath,
            spaceId: spaceId[0],
            ownerId: ownerId[0],
            members: { connect: { id: ownerId[0] } },
          },
        });
        res.status(200).json(createCategory);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  } else {
    res
      .status(500)
      .json({ message: "Tous les champs ne sont pas correctement remplis" });
  }
};

export default createCategory;
