-- AlterTable
ALTER TABLE "User" ALTER COLUMN "imageUrl" DROP NOT NULL,
ALTER COLUMN "isDisabled" SET DEFAULT false;
