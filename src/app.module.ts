import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CollaboratorModule } from './collaborator/collaborator.module';
import { cnnString } from './common/connectionHelper';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [MongooseModule.forRoot(cnnString), CollaboratorModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: AuthGuard
  }],
})
export class AppModule { }
