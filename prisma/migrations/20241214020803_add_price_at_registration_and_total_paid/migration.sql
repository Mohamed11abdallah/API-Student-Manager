/*
  Warnings:

  - Added the required column `priceAtRegistration` to the `registrations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "registrations" ADD COLUMN     "priceAtRegistration" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "totalPaid" DECIMAL(10,2) NOT NULL DEFAULT 0;
