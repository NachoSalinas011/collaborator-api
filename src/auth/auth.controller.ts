import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { User } from '../users/models/auth.model';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { SigninDto } from './models/signIn.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Post('login')
    signIn(@Body() data: SigninDto) {
        return this.authService.signIn(data.user, data.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req: User) {
        return req.user;
    }
}
