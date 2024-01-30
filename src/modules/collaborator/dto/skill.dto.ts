import { IsNotEmpty, IsString } from "class-validator";

export class skillDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;
}