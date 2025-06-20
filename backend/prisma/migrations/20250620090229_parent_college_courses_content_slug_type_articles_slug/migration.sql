/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Articles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `parent_college_id` to the `Colleges` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `established` on the `Colleges` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Articles" ADD COLUMN     "slug" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Colleges" ADD COLUMN     "parent_college_id" INTEGER NOT NULL,
DROP COLUMN "established",
ADD COLUMN     "established" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Courses" ADD COLUMN     "content" TEXT,
ADD COLUMN     "slug" TEXT,
ADD COLUMN     "type" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Articles_slug_key" ON "Articles"("slug");
