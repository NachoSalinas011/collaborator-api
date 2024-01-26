import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { cnnString } from './common/connectionHelper'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollaboratorModule } from './collaborator/collaborator.module';

@Module({
  imports: [MongooseModule.forRoot(cnnString), CollaboratorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
