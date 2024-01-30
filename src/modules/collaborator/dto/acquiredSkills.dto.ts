import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, ValidateNested } from "class-validator";
import { skillDto } from "./skill.dto";

export class acquiredskillsDto {
    @ValidateNested()
    @Type(() => skillDto)
    skill: skillDto;

    @IsNotEmpty()
    @IsNumber()
    level: number;
}
