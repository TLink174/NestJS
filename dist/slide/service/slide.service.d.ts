import { CreateSlideDto } from '../dto/create-slide.dto';
import { UpdateSlideDto } from '../dto/update-slide.dto';
import { SlideEntity } from '../entities/slide.entity';
export declare class SlideService {
    private slideRepository;
    constructor(slideRepository: typeof SlideEntity);
    create(createSlideDto: CreateSlideDto): Promise<SlideEntity>;
    findAll(): Promise<SlideEntity[]>;
    findOne(id: number): Promise<SlideEntity>;
    update(id: number, updateSlideDto: UpdateSlideDto): Promise<SlideEntity>;
    remove(id: number): Promise<number>;
}
