"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slideProviders = void 0;
const slide_entity_1 = require("./entities/slide.entity");
exports.slideProviders = [
    {
        provide: 'SLIDE_REPOSITORY',
        useValue: slide_entity_1.SlideEntity,
    }
];
//# sourceMappingURL=slide.providers.js.map