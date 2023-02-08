/* eslint-disable no-console */

import { SpaceHandlers } from "./../interface";
import prisma from "../../../../prisma/client";
import { uploadImage } from "../../../middlewares/upload/uploadCloudinary";
import asyncFormParse from "../../../middlewares/upload/formParse";

const createSpace: SpaceHandlers["create"] = async (req, res) => {
  const { role } = req.user;
  const { fields, files } = await asyncFormParse(req);
  const { name, siteId, ownerId, description } = fields;

  try {
    if (role === "ADMIN" || role === "SUPER_ADMIN") {
      if (
        name &&
        siteId &&
        ownerId &&
        description &&
        files &&
        name[0] &&
        siteId[0] &&
        ownerId[0] &&
        description &&
        files.spaceImage[0]
      ) {
        const dataImage = await uploadImage(
          files.spaceImage[0].path,
          "/spaceImages"
        );
        if (dataImage) {
          const createSpace = await prisma.space.create({
            data: {
              name: name[0],
              imageUrl: dataImage.securePath,
              siteId: siteId[0],
              ownerId: ownerId[0],
              description: description[0],
              members: {
                connect: {
                  id: ownerId[0],
                },
              },
              categories: {
                create: {
                  name: "Général",
                  imageUrl:
                    "https://res.cloudinary.com/tomahawkiwi/image/upload/v1675723461/enedis-share-2023/categoryImages/SYSPEO_wrrapc.jpg",
                  ownerId: ownerId[0],
                  members: { connect: { id: ownerId[0] } },
                  description:
                    "Ceci est la catégorie où tous les membres de l'espace peuvent accéder.",
                  isGeneral: true,
                },
              },
            },
          });
          res.status(200).json(createSpace);
        } else {
          res.status(500).json({
            message: "Tous les champs ne sont pas correctement remplis",
          });
        }
      }
    } else {
      res.status(403).json("Unauthorized");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createSpace;
