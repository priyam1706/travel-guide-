/*
  Warnings:

  - Added the required column `place_id` to the `touristAttraction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "touristAttraction" ADD COLUMN     "place_id" TEXT NOT NULL;
