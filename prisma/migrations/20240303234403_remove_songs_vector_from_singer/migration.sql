-- CreateTable
CREATE TABLE "Song" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "singerId" INTEGER NOT NULL,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_singerId_fkey" FOREIGN KEY ("singerId") REFERENCES "Singer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
