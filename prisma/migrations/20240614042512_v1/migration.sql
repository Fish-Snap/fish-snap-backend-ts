/*
  Warnings:

  - You are about to drop the column `idFishModel` on the `FishScanHistory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `CategoryNews` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `CategoryNews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scientificName` to the `FishModel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `confidence` to the `FishScanHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idUser` to the `FishScanHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scientificName` to the `FishScanHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `UserAdmin` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CategoryNews_id_idx";

-- DropIndex
DROP INDEX "FishScanHistory_id_idFishModel_codeFishModel_idx";

-- DropIndex
DROP INDEX "News_id_idx";

-- AlterTable
ALTER TABLE "CategoryNews" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "FishModel" ADD COLUMN     "location" JSONB[] DEFAULT ARRAY[]::JSONB[],
ADD COLUMN     "scientificName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "FishScanHistory" DROP COLUMN "idFishModel",
ADD COLUMN     "confidence" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "idUser" TEXT NOT NULL,
ADD COLUMN     "location" JSONB[] DEFAULT ARRAY[]::JSONB[],
ADD COLUMN     "scientificName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "codeVerify" INTEGER,
ADD COLUMN     "expiresCodeVerifyAt" TIMESTAMP(3),
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserAdmin" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CategoryNews_slug_key" ON "CategoryNews"("slug");

-- CreateIndex
CREATE INDEX "CategoryNews_id_name_tags_idx" ON "CategoryNews"("id", "name", "tags");

-- CreateIndex
CREATE INDEX "FishScanHistory_id_codeFishModel_idUser_idx" ON "FishScanHistory"("id", "codeFishModel", "idUser");

-- CreateIndex
CREATE INDEX "News_id_idCategoryNews_idx" ON "News"("id", "idCategoryNews");

-- AddForeignKey
ALTER TABLE "FishScanHistory" ADD CONSTRAINT "FishScanHistory_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
