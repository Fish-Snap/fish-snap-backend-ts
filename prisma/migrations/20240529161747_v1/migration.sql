-- CreateEnum
CREATE TYPE "TypeRoleUser" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "TypeRoleAdmin" AS ENUM ('ADMIN', 'SUPER_ADMIN');

-- CreateEnum
CREATE TYPE "TypeStatusUser" AS ENUM ('ACTIVE', 'INACTIVE', 'BANNED');

-- CreateEnum
CREATE TYPE "TypeSetting" AS ENUM ('AUTOMATION_SEND_EMAIL_VERIFICATION', 'REQUIRE_VERIF_EMAIL_FOR_LOGIN');

-- CreateEnum
CREATE TYPE "TypeNews" AS ENUM ('INTERNAL', 'EXTERNAL');

-- CreateTable
CREATE TABLE "GlobalSetting" (
    "id" SERIAL NOT NULL,
    "typeSetting" "TypeSetting" NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isActivated" BOOLEAN NOT NULL,

    CONSTRAINT "GlobalSetting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profilePic" TEXT,
    "role" "TypeRoleUser" NOT NULL DEFAULT 'USER',
    "isVerifiedEmail" BOOLEAN NOT NULL DEFAULT false,
    "status" "TypeStatusUser" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAdmin" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profilePic" TEXT,
    "role" "TypeRoleAdmin" NOT NULL DEFAULT 'ADMIN',
    "status" "TypeStatusUser" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "urlThumbImg" TEXT,
    "urlHeaderImg" TEXT,
    "urlExternalNews" TEXT,
    "publicationAt" TIMESTAMP(3) NOT NULL,
    "idAdmin" TEXT,
    "nameAuthor" TEXT NOT NULL,
    "type" "TypeNews" NOT NULL DEFAULT 'INTERNAL',
    "idCategoryNews" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryNews" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CategoryNews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FishModel" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "urlImg" TEXT NOT NULL,
    "otherNames" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "description" TEXT[],
    "productRecipe" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FishModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FishScanHistory" (
    "id" TEXT NOT NULL,
    "idFishModel" INTEGER NOT NULL,
    "codeFishModel" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "urlImg" TEXT NOT NULL,
    "otherNames" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "description" TEXT[],
    "productRecipe" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FishScanHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GlobalSetting_typeSetting_key" ON "GlobalSetting"("typeSetting");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_id_username_email_idx" ON "User"("id", "username", "email");

-- CreateIndex
CREATE UNIQUE INDEX "UserAdmin_username_key" ON "UserAdmin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "UserAdmin_email_key" ON "UserAdmin"("email");

-- CreateIndex
CREATE INDEX "UserAdmin_id_username_email_idx" ON "UserAdmin"("id", "username", "email");

-- CreateIndex
CREATE INDEX "News_id_idx" ON "News"("id");

-- CreateIndex
CREATE INDEX "CategoryNews_id_idx" ON "CategoryNews"("id");

-- CreateIndex
CREATE UNIQUE INDEX "FishModel_code_key" ON "FishModel"("code");

-- CreateIndex
CREATE INDEX "FishModel_id_code_idx" ON "FishModel"("id", "code");

-- CreateIndex
CREATE INDEX "FishScanHistory_id_idFishModel_codeFishModel_idx" ON "FishScanHistory"("id", "idFishModel", "codeFishModel");

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_idCategoryNews_fkey" FOREIGN KEY ("idCategoryNews") REFERENCES "CategoryNews"("id") ON DELETE CASCADE ON UPDATE CASCADE;
