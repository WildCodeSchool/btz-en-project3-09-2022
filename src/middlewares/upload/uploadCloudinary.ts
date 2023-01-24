import { v2 as cloudinary, UploadApiOptions } from "cloudinary";

const distantDirectory = process.env.CLOUDINARY_DIRECTORY;

export const uploadImage = async (
  imagePath: string,
  targetSubDirectory: string
) => {
  const options: UploadApiOptions = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    folder: `${distantDirectory}/${targetSubDirectory}`,
  };

  try {
    const result = await cloudinary.uploader.upload(imagePath, options);
    const objectImage = {
      name: result.public_id,
      securePath: result.secure_url,
    };
    return objectImage;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
