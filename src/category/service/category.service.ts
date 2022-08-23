import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { CategoryEntity } from '../entities/category.entity';
import { Category } from '../interface/category.interface';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: typeof CategoryEntity
  ){}

  async create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
    
    return await this.categoryRepository.create(<CategoryEntity>(createCategoryDto));
    
  }

  async findAll():Promise<Category[]> {
    let category: Category[] = await this.categoryRepository.findAll({
        //no createAt category and updateAt
        
    });
    return category;
  }

  async findOne(id: number): Promise<Category> {
    return await this.categoryRepository.findOne<CategoryEntity>({where: {id: id}});
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    let categoryFind : CategoryEntity = await this.categoryRepository.findOne<CategoryEntity>({where: {id: id}});
    if(categoryFind) {
      categoryFind.update(updateCategoryDto);
      return categoryFind;
    }
  }

  async remove(id: number) {
    return await this.categoryRepository.destroy({where: {id  : id}});
  }
}
