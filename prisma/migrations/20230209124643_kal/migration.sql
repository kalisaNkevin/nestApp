/*
  Warnings:

  - Made the column `phoneNumber` on table `Employee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `birthDate` on table `Employee` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Employee_code_key";

-- DropIndex
DROP INDEX "Employee_nationalId_key";

-- DropIndex
DROP INDEX "Employee_phoneNumber_key";

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "phoneNumber" SET NOT NULL,
ALTER COLUMN "birthDate" SET NOT NULL;
