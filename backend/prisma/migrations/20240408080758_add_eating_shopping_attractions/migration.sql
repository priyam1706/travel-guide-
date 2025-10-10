-- CreateTable
CREATE TABLE "eattingsAttraction" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "state" TEXT,
    "street" TEXT,
    "lon" DOUBLE PRECISION,
    "lat" DOUBLE PRECISION,
    "address_formatted" TEXT,
    "place_id" TEXT,

    CONSTRAINT "eattingsAttraction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shoppingAttraction" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "state" TEXT,
    "street" TEXT,
    "lon" DOUBLE PRECISION,
    "lat" DOUBLE PRECISION,
    "address_formatted" TEXT,
    "place_id" TEXT,

    CONSTRAINT "shoppingAttraction_pkey" PRIMARY KEY ("id")
);
