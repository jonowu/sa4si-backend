-- CreateTable
CREATE TABLE "Action" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "datePublished" TIMESTAMP(3),
    "image" JSONB,
    "content" JSONB,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "title" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Completion" (
    "id" SERIAL NOT NULL,
    "completionDate" TIMESTAMP(3),
    "action" INTEGER,
    "user" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Idea" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "body" TEXT,
    "dateSubmitted" TIMESTAMP(3),
    "user" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sdg" (
    "id" SERIAL NOT NULL,
    "sdgNo" INTEGER,
    "title" TEXT,
    "description" TEXT,
    "content" JSONB,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "password" TEXT,
    "profilePicture" JSONB,
    "biography" TEXT,
    "areasOfInterest" TEXT,
    "funFacts" TEXT,
    "isAdmin" BOOLEAN,
    "passwordResetToken" TEXT,
    "passwordResetIssuedAt" TIMESTAMP(3),
    "passwordResetRedeemedAt" TIMESTAMP(3),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Action_relatedSdgs_Sdg_actions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Action_categories_Category_actions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Completion_kudos_many" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_User_favouriteSdgs_many" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "Completion.action_index" ON "Completion"("action");

-- CreateIndex
CREATE INDEX "Completion.user_index" ON "Completion"("user");

-- CreateIndex
CREATE INDEX "Idea.user_index" ON "Idea"("user");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_Action_relatedSdgs_Sdg_actions_AB_unique" ON "_Action_relatedSdgs_Sdg_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_Action_relatedSdgs_Sdg_actions_B_index" ON "_Action_relatedSdgs_Sdg_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Action_categories_Category_actions_AB_unique" ON "_Action_categories_Category_actions"("A", "B");

-- CreateIndex
CREATE INDEX "_Action_categories_Category_actions_B_index" ON "_Action_categories_Category_actions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Completion_kudos_many_AB_unique" ON "_Completion_kudos_many"("A", "B");

-- CreateIndex
CREATE INDEX "_Completion_kudos_many_B_index" ON "_Completion_kudos_many"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_User_favouriteSdgs_many_AB_unique" ON "_User_favouriteSdgs_many"("A", "B");

-- CreateIndex
CREATE INDEX "_User_favouriteSdgs_many_B_index" ON "_User_favouriteSdgs_many"("B");

-- AddForeignKey
ALTER TABLE "Completion" ADD FOREIGN KEY ("action") REFERENCES "Action"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Completion" ADD FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Idea" ADD FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Action_relatedSdgs_Sdg_actions" ADD FOREIGN KEY ("A") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Action_relatedSdgs_Sdg_actions" ADD FOREIGN KEY ("B") REFERENCES "Sdg"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Action_categories_Category_actions" ADD FOREIGN KEY ("A") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Action_categories_Category_actions" ADD FOREIGN KEY ("B") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Completion_kudos_many" ADD FOREIGN KEY ("A") REFERENCES "Completion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Completion_kudos_many" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_User_favouriteSdgs_many" ADD FOREIGN KEY ("A") REFERENCES "Sdg"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_User_favouriteSdgs_many" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
