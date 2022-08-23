import { Inject, Injectable } from '@nestjs/common';
import { CreateSlideDto } from '../dto/create-slide.dto';
import { UpdateSlideDto } from '../dto/update-slide.dto';
import { SlideEntity } from '../entities/slide.entity';

@Injectable()
export class SlideService {
  constructor(
    @Inject('SLIDE_REPOSITORY')
    private slideRepository: typeof SlideEntity
  ){}
  async create(createSlideDto: CreateSlideDto): Promise<SlideEntity> {
    return await this.slideRepository.create(<SlideEntity>(createSlideDto));
  }

  async findAll(): Promise<SlideEntity[]> {
    return await this.slideRepository.findAll();
  }

  async findOne(id: number) {
    return await this.slideRepository.findOne<SlideEntity>({where: {id: id}});
  }

 async update(id: number, updateSlideDto: UpdateSlideDto) {
    let slidefind: SlideEntity = await this.slideRepository.findOne<SlideEntity>({where: {id: id}});
    if(slidefind) {
      slidefind.update(updateSlideDto);
      return slidefind;
    }
  }

  async remove(id: number) {
    return await this.slideRepository.destroy<SlideEntity>({where: {id: id}});
  }
}
