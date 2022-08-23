import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateSlideDto {
    @ApiProperty()
    @IsNotEmpty({message: "Please enter a Slide Title."})
    @IsString({message: "Title is string"})
    title: string;

    @ApiProperty()
    @IsNotEmpty({message: "Please enter a Slide description."})
    description: string;
}
