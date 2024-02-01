import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleController } from '../../modules/role/role.controller';
import { RoleService } from './role.service';
import { Role, RoleSchema } from './schemas/role.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Role.name,
            schema: RoleSchema
        }])
    ],
    providers: [RoleService],
    controllers: [RoleController]
})

export class RoleModule { }
