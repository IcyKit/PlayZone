/*
  Warnings:

  - The `created_at` column on the `posts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `created_at` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updated_at` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `FollowerToFollowing` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `updated_at` on the `posts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "FollowerToFollowing" DROP CONSTRAINT "FollowerToFollowing_follower_id_fkey";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "created_at",
ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "updated_at",
ADD COLUMN     "updated_at" TIMESTAMPTZ(3) NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "created_at",
ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "updated_at",
ADD COLUMN     "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "FollowerToFollowing";

-- CreateTable
CREATE TABLE "follower_to_following" (
    "id" UUID NOT NULL,
    "follower_id" UUID NOT NULL,
    "following_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "follower_to_following_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "follower_to_following" ADD CONSTRAINT "follower_to_following_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
