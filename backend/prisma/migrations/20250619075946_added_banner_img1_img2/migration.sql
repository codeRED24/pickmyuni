/*
  Warnings:

  - Added the required column `address` to the `Colleges` table without a default value. This is not possible if the table is not empty.
  - Added the required column `banner_img` to the `CollegewiseContent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img1` to the `CollegewiseContent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img2` to the `CollegewiseContent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `banner_img` to the `Courses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img1` to the `Courses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img2` to the `Courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Articles" ADD COLUMN     "banner_img" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "img1" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "img2" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "City" ADD COLUMN     "banner_img" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "img1" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "img2" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Colleges" ADD COLUMN     "address" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CollegewiseContent" ADD COLUMN     "banner_img" TEXT NOT NULL,
ADD COLUMN     "img1" TEXT NOT NULL,
ADD COLUMN     "img2" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "banner_img" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "img1" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "img2" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Courses" ADD COLUMN     "banner_img" TEXT NOT NULL,
ADD COLUMN     "img1" TEXT NOT NULL,
ADD COLUMN     "img2" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "LeadForm" ADD COLUMN     "query" TEXT;

-- AlterTable
ALTER TABLE "State" ADD COLUMN     "banner_img" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "img1" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "img2" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Stream" ADD COLUMN     "banner_img" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "img1" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "img2" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "query" TEXT;
