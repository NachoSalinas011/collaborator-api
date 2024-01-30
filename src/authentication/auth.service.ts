import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../modules/user/user.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async register(data: RegisterDto): Promise<any> {
        const exist = await this.userService.getByEmail(data.email);
        if (exist) {
            throw new BadRequestException(`Ya existe usuario registrado con email '${data.email}'`)
        }

        await this.userService.create(data);
    }

    async logIn(data: LoginDto): Promise<any> {
        const user = await this.userService.getByEmail(data.email);

        if (user?.password !== data.password) {
            throw new NotFoundException(`No se encontró el usuario '${data.email}'`);
        }

        const payload = { sub: user.id, username: user.email, roles: user.role };
        return {
            access_token: await this.jwtService.signAsync(payload),
        }
    }
}
