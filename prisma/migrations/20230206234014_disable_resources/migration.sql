-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "isDisabled" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "isDisabled" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "isDisabled" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "isDisabled" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Space" ADD COLUMN     "isDisabled" BOOLEAN NOT NULL DEFAULT false;
