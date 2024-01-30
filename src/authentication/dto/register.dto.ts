import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { Role } from "src/common/enums/role.enum";

export class RegisterDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}