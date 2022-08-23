import { CategoryService } from '../service/category.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<import("../entities/category.entity").CategoryEntity>;
    findAll(): Promise<import("../interface/category.interface").Category[]>;
    findOne(id: string): Promise<import("../interface/category.interface").Category>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import("../entities/category.entity").CategoryEntity>;
    remove(id: string): Promise<number>;
}
