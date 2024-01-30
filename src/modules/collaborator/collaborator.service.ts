import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Collaborator } from './schemas/collaborator.schema';
import { collaboratorCreateDto } from './dto/collaborator-create.dto';

@Injectable()
export class CollaboratorService {
    constructor(
        @InjectModel(Collaborator.name)
        private collaboratorModel: Model<Collaborator>
    ) { }

    async create(collaborator: collaboratorCreateDto) {
        const createdCollaborator = new this.collaboratorModel(collaborator);
        return createdCollaborator.save();
    }
}
