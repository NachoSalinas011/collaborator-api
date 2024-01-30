import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './authentication/auth.module';
import { AuthGuard } from './authentication/guards/auth.guard';
import { IdGuard } from './authentication/guards/id.guard';
import { RolesGuard } from './authentication/guards/roles.guard';
import { cnnString } from './common/helpers/connection.helper';
import { CollaboratorModule } from './modules/collaborator/collaborator.module';
import { RoleModule } from './modules/role/role.module';
import { SkillModule } from './modules/skill/skill.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [MongooseModule.forRoot(cnnString), CollaboratorModule, AuthModule, UserModule, SkillModule, RoleModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    },
    {
      provide: APP_GUARD,
      useClass: IdGuard
    }
  ],
})
export class AppModule { }
