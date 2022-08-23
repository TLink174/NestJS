import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { DatabaseModule } from './configs/database/database.providers';
import { SlideModule } from './slide/slide.module';

@Module({
  imports: [CategoryModule, DatabaseModule, SlideModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
