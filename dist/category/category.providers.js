"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catsProviders = void 0;
const category_entity_1 = require("./entities/category.entity");
exports.catsProviders = [
    {
        provide: 'CATEGORY_REPOSITORY',
        useValue: category_entity_1.CategoryEntity,
    },
];
//# sourceMappingURL=category.providers.js.map