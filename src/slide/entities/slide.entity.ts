import { Column, Model, Table } from "sequelize-typescript";

@Table({ tableName: "Slides" })
export class SlideEntity extends Model<SlideEntity>{
    
    @Column({primaryKey : true, autoIncrement : true})
    id?: number;

    @Column
    title?: string;

    @Column
    description?: string;

    @Column
    path_image?: string;

    @Column
    name_image?: string;
}
