import { IsNotEmpty, IsString } from "class-validator";

export class addressDto {
    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    street: string;

    @IsNotEmpty()
    @IsString()
    number: string;

    @IsNotEmpty()
    @IsString()
    country: string;
}