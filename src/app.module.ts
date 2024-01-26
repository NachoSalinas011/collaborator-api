import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CollaboratorModule } from './collaborator/collaborator.module';
import { cnnString } from './common/connectionHelper';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot(cnnString), CollaboratorModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
