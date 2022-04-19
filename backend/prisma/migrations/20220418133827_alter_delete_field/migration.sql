-- DropForeignKey
ALTER TABLE "coments" DROP CONSTRAINT "coments_postId_fkey";

-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_postComents_fkey";

-- DropIndex
DROP INDEX "coments_postId_key";

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_postComents_fkey" FOREIGN KEY ("postComents") REFERENCES "coments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coments" ADD CONSTRAINT "coments_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
