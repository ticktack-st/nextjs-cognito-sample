-- CreateTable
CREATE TABLE "Post" (
    "id" int NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" VARCHAR NOT NULL,
    "content" VARCHAR,
    "published" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);