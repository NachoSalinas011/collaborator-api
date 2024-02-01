import { Type } from "class-transformer";
import { IsDateString, IsNotEmpty, IsOptional, ValidateNested } from "class-validator";
import { acquiredskillsDto } from './acquiredSkills.dto';
import { personDto } from "./person.dto";

export class collaboratorCreateDto {
    @ValidateNested()
    @Type(() => personDto)
    person: personDto;

    @IsNotEmpty()
    jobPosition: string;

    @IsNotEmpty()
    @IsDateString()
    admissionDate: Date;

    @IsDateString()
    @IsOptional()
    dischargeDate?: Date;

    @ValidateNested()
    @Type(() => acquiredskillsDto)
    acquiredskills: acquiredskillsDto[]
}