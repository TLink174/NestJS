import { CategoryEntity } from "./entities/category.entity";

export const catsProviders = [
  {
    provide: 'CATEGORY_REPOSITORY',
    useValue: CategoryEntity,
  },
];