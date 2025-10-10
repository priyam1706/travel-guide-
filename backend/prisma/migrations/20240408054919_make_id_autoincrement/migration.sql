/*
  Warnings:

  - The primary key for the `Location` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Location` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `TouristPlace` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `TouristPlace` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `locationId` on the `TouristPlace` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "TouristPlace" DROP CONSTRAINT "TouristPlace_locationId_fkey";

-- AlterTable
ALTER TABLE "Location" DROP CONSTRAINT "Location_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Location_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "TouristPlace" DROP CONSTRAINT "TouristPlace_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "locationId",
ADD COLUMN     "locationId" INTEGER NOT NULL,
ADD CONSTRAINT "TouristPlace_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "TouristPlace" ADD CONSTRAINT "TouristPlace_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
