import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(username: string, password: string): Promise<any> {
        const user = await this.usersService.getByUsername(username);

        if (user?.password !== password) {
            throw new UnauthorizedException();
        }

        const payload = { sub: user.id, username: user.user, roles: user.roles };

        return {
            access_token: await this.jwtService.signAsync(payload),
        }
    }
}
