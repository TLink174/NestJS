import { Module } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { SlideEntity } from 'src/slide/entities/slide.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'nest_js',
            });
            sequelize.addModels([CategoryEntity]);
            sequelize.addModels([SlideEntity]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule {}