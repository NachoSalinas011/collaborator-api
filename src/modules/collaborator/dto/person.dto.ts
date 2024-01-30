import { Type } from "class-transformer";
import { IsDateString, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { addressDto } from './address.dto';

export class personDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsDateString()
    birthDate: Date;

    @ValidateNested()
    @Type(() => addressDto)
    address: addressDto;
}