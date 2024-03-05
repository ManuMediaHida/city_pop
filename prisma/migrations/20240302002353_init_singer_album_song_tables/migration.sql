-- CreateTable
CREATE TABLE "Singer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "birthdayAge" INTEGER NOT NULL,
    "birthdayCity" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Singer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Album" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "singerId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Song" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "albumId" INTEGER NOT NULL,
    "singerId" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "duration" TEXT NOT NULL,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Album" ADD CONSTRAINT "Album_singerId_fkey" FOREIGN KEY ("singerId") REFERENCES "Singer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_singerId_fkey" FOREIGN KEY ("singerId") REFERENCES "Singer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
