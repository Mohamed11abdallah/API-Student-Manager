/*
  Warnings:

  - You are about to drop the column `rest` on the `payments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "payments" DROP COLUMN "rest";

-- AlterTable
ALTER TABLE "registrations" ADD COLUMN     "rest" DECIMAL(10,2);
