-- CreateTable
CREATE TABLE "Portofolio" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT,
    "images" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "middle_name" TEXT,
    "last_name" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "welcome_message" TEXT,
    "my_about" TEXT,
    "about_subtitle" TEXT,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "cVId" TEXT,
    CONSTRAINT "Profile_cVId_fkey" FOREIGN KEY ("cVId") REFERENCES "CV" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CV" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cv_name" TEXT NOT NULL,
    "version" TEXT,
    "cv_data" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME
);

-- CreateTable
CREATE TABLE "Stack" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "stack_name" TEXT NOT NULL,
    "stack_icon" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "profileId" TEXT,
    CONSTRAINT "Stack_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "contact_name" TEXT NOT NULL,
    "contact_icon" TEXT NOT NULL,
    "contact_type" TEXT NOT NULL,
    "contact_url" TEXT,
    "createdAt" DATETIME,
    "updatedAt" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "Portofolio_id_key" ON "Portofolio"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_id_key" ON "Profile"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CV_id_key" ON "CV"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Stack_id_key" ON "Stack"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Stack_stack_name_key" ON "Stack"("stack_name");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_id_key" ON "Contact"("id");
