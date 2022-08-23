import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { CategoryEntity } from '../entities/category.entity';
import { Category } from '../interface/category.interface';
export declare class CategoryService {
    private categoryRepository;
    constructor(categoryRepository: typeof CategoryEntity);
    create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity>;
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity>;
    remove(id: number): Promise<number>;
}
