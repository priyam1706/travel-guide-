import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import fetch from 'node-fetch';
import { Console } from 'console';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface LocationAI {
  locations: string[];
}

@Injectable()
export class GetTouristAttractionService {
  constructor(private readonly prisma: PrismaService) {}

  async getRoutes(location: string) {
    try {
      const locationSplitted = location.split(',')[0];

      const routes = await this.prisma.route.findMany({
        where: {
          to: locationSplitted,
        },
      });

      return { routes };
    } catch (e) {
      console.log(e);
      throw new Error('Server failed' + e);
    }
  }
  async getHotels(location: string) {
    try {
      const hotels = await this.prisma.hostel.findMany({
        where: {
          location: location,
        },
      });

      return { hotels };
    } catch (e) {
      console.log(e);
      throw new Error('Server failed to get tourist attraction.');
    }
  }

  async getTouristAttraction(location: string) {
    const eating_text: string =
      'catering.cafe,catering.fast_food,catering.restaurant';
    const tourism_text: string = 'tourism.attraction,tourism.sights';
    const shopping_text: string =
      'commercial.shopping_mall,commercial.supermarket,commercial.marketplace';

    var touristAttraction;
    var eating;
    var shopping;
    try {
      console.log(location);
      const location_id: string | null = await this.getLocationId(location);
      console.log(location_id);
      if (!location_id) {
        throw new Error('Location not found.');
      }

      // touristAttraction
      touristAttraction = await this.prisma.touristAttraction.findMany({
        where: {
          place_id: location_id,
        },
      });
      if (touristAttraction.length == 0) {
        touristAttraction = await this.fetchApi(tourism_text, location_id);

        const touristJson = touristAttraction;
        touristJson.features.forEach(async (element) => {
          await this.prisma.touristAttraction.createMany({
            data: {
              name: element.properties.name || '',
              state: element.properties.state || '',
              street: element.properties.street || '',
              lon: element.properties.lon || '',
              lat: element.properties.lat || '',
              address_formatted: element.properties.formatted || '',
              place_id: element.properties.place_id || '',
            },
          });
        });
      }

      // Eating Attraction
      eating = await this.prisma.eattingsAttraction.findMany({
        where: {
          place_id: location_id,
        },
      });
      if (eating.length == 0) {
        eating = await this.fetchApi(tourism_text, location_id);

        const eatingJson = touristAttraction;
        eatingJson.features.forEach(async (element) => {
          await this.prisma.touristAttraction.createMany({
            data: {
              name: element.properties.name || '',
              state: element.properties.state || '',
              street: element.properties.street || '',
              lon: element.properties.lon || '',
              lat: element.properties.lat || '',
              address_formatted: element.properties.formatted || '',
              place_id: element.properties.place_id || '',
            },
          });
        });
      }

      // Shopping Attraction
      shopping = await this.prisma.shoppingAttraction.findMany({
        where: {
          place_id: location_id,
        },
      });
      console.log(shopping);
      if (shopping.length == 0) {
        shopping = await this.fetchApi(tourism_text, location_id);

        const shoppingJson = eating;
        shoppingJson.features.forEach(async (element) => {
          await this.prisma.shoppingAttraction.createMany({
            data: {
              name: element.properties.name || '',
              state: element.properties.state || '',
              street: element.properties.street || '',
              lon: element.properties.lon || '',
              lat: element.properties.lat || '',
              address_formatted: element.properties.formatted || '',
              place_id: element.properties.place_id || '',
            },
          });
        });
      }

      // Shopping
      eating = await this.prisma.eattingsAttraction.findMany({
        where: {
          place_id: location_id,
        },
      });
      if (!eating) {
        eating = await this.fetchApi(tourism_text, location_id);

        const shoppingJson = shopping;
        shoppingJson.features.forEach(async (element) => {
          await this.prisma.shoppingAttraction.createMany({
            data: {
              name: element.properties.name || '',
              state: element.properties.state || '',
              street: element.properties.street || '',
              lon: element.properties.lon || '',
              lat: element.properties.lat || '',
              address_formatted: element.properties.address_formatted || '',
              place_id: element.properties.place_id || '',
            },
          });
        });
      }

      return { touristAttraction, eating, shopping };
    } catch (error) {
      console.log(error);
      throw new Error('Server failed to get tourist attraction.');
    }
  }

  async getLocationId(location: string): Promise<string | null> {
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${location}&format=json&apiKey=${process.env.GEO_API_KEY}`,
    );
    const data = await response.json();
    const location_id = data.results[0].place_id;
    return location_id || null;
  }

  async fetchApi(type: string, location_id: string) {
    try {
      const response = await fetch(
        `https://api.geoapify.com/v2/places?categories=${type}&filter=place:${location_id}&limit=20&apiKey=${process.env.GEO_API_KEY}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('APi Failed');
    }
  }

  async getTouristAttractionAIDemo(location: string) {
    try {
      const locations = await this.getResponse(location);
      return locations;
    } catch {
      throw new Error('Server failed to get tourist attraction.');
    }
  }

  async getResponse(location: string) {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);

    async function run() {
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

      const prompt = ` you are an travel guide, you are in ${location} and you want to know about tourist attraction in ${location}

      give output in this format: 
      {
        locations: [location1, location2, location3, location4, location5, location6, location7],
        foods: [food1, food2, food3, food4, food5, food6, food7],
        shopping: [shopping1, shopping2, shopping3, shopping4, shopping5, shopping6, shopping7]
      }

     RULES: 
     1. up-to-date information 
     2. friendly tone.
      3. 5-7 locations
      4. avoid using technical terms
      5. use simple language
     `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      return text;
    }

    return run();
  }
}
