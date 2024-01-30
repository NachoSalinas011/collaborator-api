import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcrypt';
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
            throw new BadRequestException(`There is already an account with email '${data.email}'`)
        }

        data.password = await bcryptjs.hash(data.password, 10);
        await this.userService.create(data);
    }

    async logIn(data: LoginDto): Promise<any> {
        const user = await this.userService.getByEmail(data.email);

        if (!user) {
            throw new UnauthorizedException('Email is wrong');
        }

        const isValidPassword = await bcryptjs.compare(data.password, user.password);

        if (!isValidPassword) {
            throw new UnauthorizedException('Password is wrong');
        }

        const payload = { sub: user.id, username: user.email, roles: user.role };
        return {
            access_token: await this.jwtService.signAsync(payload),
        }
    }
}
