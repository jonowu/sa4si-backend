-- AlterTable
ALTER TABLE "User" ADD COLUMN     "passwordResetToken" TEXT,
ADD COLUMN     "passwordResetIssuedAt" TIMESTAMP(3),
ADD COLUMN     "passwordResetRedeemedAt" TIMESTAMP(3);
