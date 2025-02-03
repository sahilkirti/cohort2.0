/*
  Warnings:

  - You are about to drop the column `email` on the `users` table. All the data in the column will be lost.
  - Added the required column `firstname` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "email",
ADD COLUMN     "firstname" VARCHAR(255) NOT NULL,
ADD COLUMN     "lastname" VARCHAR(255) NOT NULL;
