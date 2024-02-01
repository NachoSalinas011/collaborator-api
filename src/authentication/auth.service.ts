import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcrypt';
import { jwtRefreshToken, jwtToken, jwtTokenDuration } from 'src/common/helpers/secret.helper';
import { UserService } from '../modules/user/user.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async register(data: RegisterDto): Promise<void> {
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
            access_token: await this.generateToken(payload, jwtToken, '1m'),
            refresh_token: await this.generateToken(payload, jwtRefreshToken, '5m')
        }
    }

    async refreshToken(refreshToken: string) {
        const verifiedToken = await this.verifyToken(refreshToken, jwtRefreshToken);

        if (!verifiedToken) {
            throw new UnauthorizedException()
        }
        const payload = { sub: verifiedToken.sub, username: verifiedToken.username, roles: verifiedToken.roles };

        const new_access_token = await this.generateToken(payload, jwtToken, jwtTokenDuration);

        return {
            access_token: new_access_token
        }
    }

    async verifyToken(token: string, config: string): Promise<any> {
        return this.jwtService.verify(token, {
            secret: config
        });
    }

    async generateToken(payload: any, secret: string, expirationTime: string): Promise<string> {
        return this.jwtService.sign(payload, {
            secret: secret,
            expiresIn: expirationTime
        })
    }
}
