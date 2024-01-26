import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './auth/roles.guard';
import { CollaboratorModule } from './collaborator/collaborator.module';
import { cnnString } from './common/connectionHelper';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot(cnnString), CollaboratorModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: AuthGuard
  },
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }],
})
export class AppModule { }
