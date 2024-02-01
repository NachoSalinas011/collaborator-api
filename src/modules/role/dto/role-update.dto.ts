import { IsNotEmpty, IsString } from "class-validator";

export class roleUpdateDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}