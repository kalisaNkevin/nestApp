/*
  Warnings:

  - You are about to drop the column `natioanId` on the `Employee` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nationalId]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nationalId` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Employee_natioanId_key";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "natioanId",
ADD COLUMN     "nationalId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Employee_nationalId_key" ON "Employee"("nationalId");
