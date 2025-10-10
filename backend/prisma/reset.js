const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function reset() {
    try {
        await prisma.User.deleteMany({});
        await prisma.TouristPlace.deleteMany({});
        await prisma.location.deleteMany({});

        console.info('The data in the db has been reset');
    } catch (error) {
        console.error(error);
    }
}

reset();