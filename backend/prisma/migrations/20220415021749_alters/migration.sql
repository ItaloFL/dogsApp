/*
  Warnings:

  - You are about to drop the column `created_at` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[postId]` on the table `coments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `author` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_userId_fkey";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
DROP COLUMN "userId",
ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "postComents" TEXT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "created_at",
DROP COLUMN "updated_at";

-- CreateIndex
CREATE UNIQUE INDEX "coments_postId_key" ON "coments"("postId");

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_author_fkey" FOREIGN KEY ("author") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_postComents_fkey" FOREIGN KEY ("postComents") REFERENCES "coments"("id") ON DELETE SET NULL ON UPDATE CASCADE;
