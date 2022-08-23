import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @ApiProperty()
    @IsNotEmpty({message: "Please enter a category name."})
    @IsString({message:"name is string"})
    name: string;
    @ApiProperty()
    @IsNotEmpty({message: "Please enter a category description."})
    description: string;

}
