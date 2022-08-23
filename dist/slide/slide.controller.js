"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideController = void 0;
const common_1 = require("@nestjs/common");
const slide_service_1 = require("./service/slide.service");
const create_slide_dto_1 = require("./dto/create-slide.dto");
const update_slide_dto_1 = require("./dto/update-slide.dto");
let SlideController = class SlideController {
    constructor(slideService) {
        this.slideService = slideService;
    }
    create(createSlideDto) {
        return this.slideService.create(createSlideDto);
    }
    findAll() {
        return this.slideService.findAll();
    }
    findOne(id) {
        return this.slideService.findOne(+id);
    }
    update(id, updateSlideDto) {
        return this.slideService.update(+id, updateSlideDto);
    }
    remove(id) {
        return this.slideService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_slide_dto_1.CreateSlideDto]),
    __metadata("design:returntype", void 0)
], SlideController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SlideController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SlideController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_slide_dto_1.UpdateSlideDto]),
    __metadata("design:returntype", void 0)
], SlideController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SlideController.prototype, "remove", null);
SlideController = __decorate([
    (0, common_1.Controller)('slide'),
    __metadata("design:paramtypes", [slide_service_1.SlideService])
], SlideController);
exports.SlideController = SlideController;
//# sourceMappingURL=slide.controller.js.map