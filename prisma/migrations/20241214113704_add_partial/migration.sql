/*
  Warnings:

  - You are about to drop the column `isPartial` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `partialAmount` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `priceAtRegistration` on the `registrations` table. All the data in the column will be lost.
  - You are about to drop the column `totalPaid` on the `registrations` table. All the data in the column will be lost.
  - Changed the type of `duration` on the `modules` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "modules" DROP COLUMN "duration",
ADD COLUMN     "duration" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "payments" DROP COLUMN "isPartial",
DROP COLUMN "partialAmount";

-- AlterTable
ALTER TABLE "registrations" DROP COLUMN "priceAtRegistration",
DROP COLUMN "totalPaid";
