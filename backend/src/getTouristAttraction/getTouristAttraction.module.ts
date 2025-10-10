import { Module } from '@nestjs/common';
import { GetTouristAttractionService } from './getTouristAttraction.service';
import { GetTouristAttractionController } from './getTouristAttraction.controller';

@Module({
  providers: [GetTouristAttractionService],
  controllers: [GetTouristAttractionController],
})
export class GetTouristAttractionModule {}
