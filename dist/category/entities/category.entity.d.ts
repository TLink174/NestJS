import { Model } from "sequelize-typescript";
export declare class CategoryEntity extends Model<CategoryEntity> {
    id: number;
    name: string;
    description: string;
    slug: string;
}
