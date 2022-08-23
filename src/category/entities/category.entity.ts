import { Column, Model, Table } from "sequelize-typescript";


@Table({ tableName: 'categoies'})
export class CategoryEntity extends Model<CategoryEntity> {

    @Column({ primaryKey: true, autoIncrement: true })
    id: number;

    @Column
    name: string;

    @Column
    description: string;

    @Column
    slug: string;


}
