import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill } from './schemas/skill.schema';
import { skillUpdateDto } from './dto/skill-update.dto';
import { skillCreateDto } from './dto/skill-create.dto';

@Injectable()
export class SkillService {
    constructor(
        @InjectModel(Skill.name)
        private skillModel: Model<Skill>
    ) { }

    async create(skill: skillCreateDto) {
        const createdSkill = new this.skillModel(skill);
        return createdSkill.save();
    }

    async update(id: string, data: skillUpdateDto) {
        return this.skillModel.findByIdAndUpdate(id, data, {
            new: true
        }).exec();
    }

    async getAll() {
        return this.skillModel.find().exec();
    }

    async getById(id: string) {
        return this.skillModel.findById(id).exec();
    }

    async delete(id: string) {
        return this.skillModel.findByIdAndDelete(id).exec();
    }
}
