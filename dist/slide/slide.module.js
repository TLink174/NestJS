"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideModule = void 0;
const common_1 = require("@nestjs/common");
const slide_service_1 = require("./service/slide.service");
const slide_controller_1 = require("./controller/slide.controller");
const slide_providers_1 = require("./slide.providers");
let SlideModule = class SlideModule {
};
SlideModule = __decorate([
    (0, common_1.Module)({
        controllers: [slide_controller_1.SlideController],
        providers: [slide_service_1.SlideService, ...slide_providers_1.slideProviders]
    })
], SlideModule);
exports.SlideModule = SlideModule;
//# sourceMappingURL=slide.module.js.map