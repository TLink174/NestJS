import { SlideService } from './service/slide.service';
import { CreateSlideDto } from './dto/create-slide.dto';
import { UpdateSlideDto } from './dto/update-slide.dto';
export declare class SlideController {
    private readonly slideService;
    constructor(slideService: SlideService);
    create(createSlideDto: CreateSlideDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSlideDto: UpdateSlideDto): string;
    remove(id: string): string;
}
