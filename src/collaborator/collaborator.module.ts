import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Collaborator, CollaboratorSchema } from './schemas/collaborator.schema';
import { CollaboratorService } from './collaborator.service';
import { CollaboratorController } from './collaborator.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Collaborator.name,
            schema: CollaboratorSchema
        }])
    ],
    providers: [CollaboratorService],
    controllers: [CollaboratorController]
})
export class CollaboratorModule { }
