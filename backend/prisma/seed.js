const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    // Create users
    const user1 = await prisma.user.create({
        data: {
            email: 'user1@example.com',
            name: 'User 1',
            token: 'fa@jdskf834hqurfer'
        },
    });

    const user2 = await prisma.user.create({
        data: {
            email: 'user2@example.com',
            name: 'User 2',
            token: 'fjalk%jdfio3'
        },
    });

    // Create hostels
    const hostelsData = [
        {
            name: "Taj Mahal Hostel",
            location: "Taj Mahal, Agra, Uttar Pradesh",
            rating: 4.8,
            image: "url_to_taj_mahal_hostel_image.jpg",
        },
        {
            name: "Jaipur Hostel",
            location: "Jaipur, Rajasthan",
            rating: 4.5,
            image: "url_to_jaipur_hostel_image.jpg",
        },
        {
            name: "Kerala Backwaters Hostel",
            location: "Kerala Backwaters, Kerala",
            rating: 4.7,
            image: "url_to_kerala_backwaters_hostel_image.jpg",
        },
        {
            name: "Varanasi Hostel",
            location: "Varanasi, Uttar Pradesh",
            rating: 4.4,
            image: "url_to_varanasi_hostel_image.jpg",
        },
        {
            name: "Goa Beach Hostel",
            location: "Goa Beaches, Goa",
            rating: 4.6,
            image: "url_to_goa_beach_hostel_image.jpg",
        },
        {
            name: "Mumbai Hostel",
            location: "c",
            rating: 4.3,
            image: "url_to_mumbai_hostel_image.jpg",
        },
        {
            name: "Darjeeling Hostel",
            location: "Darjeeling, West Bengal",
            rating: 4.5,
            image: "url_to_darjeeling_hostel_image.jpg",
        },
        {
            name: "Hampi Hostel",
            location: "Hampi, Karnataka",
            rating: 4.6,
            image: "url_to_hampi_hostel_image.jpg",
        },
        {
            name: "Amritsar Hostel",
            location: "Amritsar, Punjab",
            rating: 4.5,
            image: "url_to_amritsar_hostel_image.jpg",
        },
        {
            name: "Rishikesh Hostel",
            location: "Rishikesh, Uttarakhand",
            rating: 4.4,
            image: "url_to_rishikesh_hostel_image.jpg",
        },
    ];

    for (const hostel of hostelsData) {
        await prisma.hostel.create({
            data: hostel,
        });
    }

    // Create routes
    const routesData = [
        {
            type: "bus",
            distance: "200 km",
            time: "4 hours",
            from: "Taj Mahal",
            to: "Jaipur",
        },
        {
            type: "train",
            distance: "800 km",
            time: "12 hours",
            from: "Jaipur",
            to: "Kerala Backwaters",
        },
        {
            type: "train",
            distance: "1500 km",
            time: "20 hours",
            from: "Kerala Backwaters",
            to: "Varanasi",
        },
        {
            type: "bus",
            distance: "1200 km",
            time: "18 hours",
            from: "Varanasi",
            to: "Goa Beaches",
        },
        {
            type: "bus",
            distance: "600 km",
            time: "10 hours",
            from: "Goa Beaches",
            to: "Mumbai",
        },
        {
            type: "train",
            distance: "1700 km",
            time: "24 hours",
            from: "Mumbai",
            to: "Darjeeling",
        },
        {
            type: "bus",
            distance: "800 km",
            time: "14 hours",
            from: "Darjeeling",
            to: "Hampi",
        },
        {
            type: "bus",
            distance: "400 km",
            time: "8 hours",
            from: "Hampi",
            to: "Amritsar",
        },
        {
            type: "train",
            distance: "600 km",
            time: "10 hours",
            from: "Amritsar",
            to: "Rishikesh",
        },
    ];

    for (const route of routesData) {
        await prisma.route.create({
            data: route,
        });
    }

    console.log('Seed data created successfully.');
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
