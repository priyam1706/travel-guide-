-- CreateTable
CREATE TABLE "touristAttraction" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "lon" DOUBLE PRECISION NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "address_formatted" TEXT NOT NULL,

    CONSTRAINT "touristAttraction_pkey" PRIMARY KEY ("id")
);
