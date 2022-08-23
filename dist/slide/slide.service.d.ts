import { CreateSlideDto } from './dto/create-slide.dto';
import { UpdateSlideDto } from './dto/update-slide.dto';
export declare class SlideService {
    create(createSlideDto: CreateSlideDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSlideDto: UpdateSlideDto): string;
    remove(id: number): string;
}
