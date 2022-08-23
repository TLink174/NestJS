import { SlideService } from '../service/slide.service';
import { CreateSlideDto } from '../dto/create-slide.dto';
import { UpdateSlideDto } from '../dto/update-slide.dto';
export declare class SlideController {
    private readonly slideService;
    constructor(slideService: SlideService);
    create(createSlideDto: CreateSlideDto): Promise<import("../entities/slide.entity").SlideEntity>;
    findAll(): Promise<import("../entities/slide.entity").SlideEntity[]>;
    findOne(id: string): Promise<import("../entities/slide.entity").SlideEntity>;
    update(id: string, updateSlideDto: UpdateSlideDto): Promise<import("../entities/slide.entity").SlideEntity>;
    remove(id: string): Promise<number>;
}
