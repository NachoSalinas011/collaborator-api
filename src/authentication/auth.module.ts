import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtToken } from 'src/common/helpers/secret.helper';
import { UserModule } from '../modules/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [UserModule,
    JwtModule.register({
      global: true,
      secret: jwtToken,
      signOptions: { expiresIn: '1m' }
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule { }
