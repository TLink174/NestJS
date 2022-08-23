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
exports.SlideService = void 0;
const common_1 = require("@nestjs/common");
let SlideService = class SlideService {
    constructor(slideRepository) {
        this.slideRepository = slideRepository;
    }
    async create(createSlideDto) {
        return await this.slideRepository.create((createSlideDto));
    }
    async findAll() {
        return await this.slideRepository.findAll();
    }
    async findOne(id) {
        return await this.slideRepository.findOne({ where: { id: id } });
    }
    async update(id, updateSlideDto) {
        let slidefind = await this.slideRepository.findOne({ where: { id: id } });
        if (slidefind) {
            slidefind.update(updateSlideDto);
            return slidefind;
        }
    }
    async remove(id) {
        return await this.slideRepository.destroy({ where: { id: id } });
    }
};
SlideService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SLIDE_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], SlideService);
exports.SlideService = SlideService;
//# sourceMappingURL=slide.service.js.map