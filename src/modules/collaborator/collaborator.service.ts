import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { collaboratorCreateDto } from './dto/collaborator-create.dto';
import { Collaborator } from './schemas/collaborator.schema';

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

    async update(id: string, collaborator: any) {
        return this.collaboratorModel.findByIdAndUpdate(id, collaborator, {
            new: true
        }).exec();
    }

    async getAll() {
        return this.collaboratorModel.find().exec();
    }

    async findByid(id: string) {
        return this.collaboratorModel.findById(id).exec();
    }

    async delete(id: string) {
        return this.collaboratorModel.findByIdAndDelete(id).exec();
    }
}
