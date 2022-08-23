import { SlideEntity } from "./entities/slide.entity";

export const slideProviders = [
    {
        provide: 'SLIDE_REPOSITORY',
        useValue: SlideEntity,
    }
]