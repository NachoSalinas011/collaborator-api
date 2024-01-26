import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Collaborator } from './schemas/collaborator.schema';

@Injectable()
export class CollaboratorService {
    constructor(
        @InjectModel(Collaborator.name)
        private collaboratorModel: Model<Collaborator>
    ) { }

    async create(collaborator: any) {
        const createdCollaborator = new this.collaboratorModel(collaborator);

        return createdCollaborator.save(); //Acá se guarda en la base de datos
    }
}
