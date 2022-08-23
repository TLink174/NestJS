import { Model } from "sequelize-typescript";
export declare class SlideEntity extends Model<SlideEntity> {
    id?: number;
    title?: string;
    description?: string;
    path_image?: string;
    name_image?: string;
}
