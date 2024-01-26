import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { User } from '../users/models/auth.model';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { SigninDto } from './models/signIn.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Public()
    @Post('login')
    signIn(@Body() data: SigninDto) {
        return this.authService.signIn(data.user, data.password);
    }

    @Get('profile')
    getProfile(@Request() req: User) {
        return req.user;
    }
}
