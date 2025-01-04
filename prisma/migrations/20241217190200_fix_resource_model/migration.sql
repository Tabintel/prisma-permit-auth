/*
  Warnings:

  - You are about to drop the column `email` on the `Resource` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Resource_email_key";

-- AlterTable
ALTER TABLE "Resource" DROP COLUMN "email";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
