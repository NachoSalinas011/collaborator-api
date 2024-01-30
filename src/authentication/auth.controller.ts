import { Body, Controller, Get, Post, Request, ValidationPipe } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Public()
    @Post('register')
    register(@Body(new ValidationPipe()) data: RegisterDto) {
        return this.authService.register(data);
    }

    @Public()
    @Post('login')
    logIn(@Body(new ValidationPipe()) data: LoginDto) {
        return this.authService.logIn(data);
    }

    @Get('profile')
    getProfile(@Request() data: any) {
        return data.user;
    }
}
