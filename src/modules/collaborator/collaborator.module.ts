import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollaboratorController } from './collaborator.controller';
import { CollaboratorService } from './collaborator.service';
import { Collaborator, CollaboratorSchema } from './schemas/collaborator.schema';

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
