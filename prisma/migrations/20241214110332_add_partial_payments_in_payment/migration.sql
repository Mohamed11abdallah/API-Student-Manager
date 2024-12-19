-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "isPartial" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "partialAmount" DECIMAL(10,2);
