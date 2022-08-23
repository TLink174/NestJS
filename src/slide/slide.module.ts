import { Module } from '@nestjs/common';
import { SlideService } from './service/slide.service';
import { SlideController } from './controller/slide.controller';
import { slideProviders } from './slide.providers';

@Module({
  controllers: [SlideController],
  providers: [SlideService, ...slideProviders]
})
export class SlideModule {}
