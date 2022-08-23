import { Module } from '@nestjs/common';
import { CategoryService } from './service/category.service';
import { CategoryController } from './controller/category.controller';
import { catsProviders } from './category.providers';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, ...catsProviders]
})
export class CategoryModule {}
