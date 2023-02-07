/* eslint-disable no-console */

import { CategoryHandlers } from "./../interface";
import prisma from "../../../../prisma/client";
import asyncFormParse from "../../../middlewares/upload/formParse";
import { uploadImage } from "../../../middlewares/upload/uploadCloudinary";

const updateCategory: CategoryHandlers["update"] = async (req, res) => {
  const { id } = req.params;
  const { fields, files } = await asyncFormParse(req);
  const { name, spaceId, ownerId, description, isDisabled } = fields;

  try {
    const dataImage =
      files.categoryImage &&
      (await uploadImage(files.categoryImage[0].path, "/categoryImages"));

    const updateCategory = await prisma.category.update({
      where: {
        id: id,
      },
      data: {
        name: name ? name[0] : undefined,
        spaceId: spaceId ? spaceId[0] : undefined,
        imageUrl: dataImage ? dataImage.securePath : undefined,
        ownerId: ownerId ? ownerId[0] : undefined,
        description: description ? description[0] : undefined,
        isDisabled: isDisabled ? isDisabled[0] : undefined,
        // posts: {
        //   updateMany: {
        //     where: { categoryId: id },
        //     data: {
        //       isDisabled: isDisabled && isDisabled[0] === "true" && "true",
        //     },
        //   },
        // },
      },
    });
    res.status(200).json(updateCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateCategory;

// data: {isDisabled:isDisabled && isDisabled[0] === "true" && "true"}
