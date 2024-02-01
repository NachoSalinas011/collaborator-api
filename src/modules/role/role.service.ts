import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoleCreateDto } from './dto/role-create.dto';
import { roleUpdateDto } from './dto/role-update.dto';
import { Role } from './schemas/role.schema';

@Injectable()
export class RoleService {

    constructor(
        @InjectModel(Role.name)
        private roleModel: Model<Role>
    ) { }

    async create(role: RoleCreateDto) {
        const createdRole = new this.roleModel(role);
        createdRole.save();
    }

    async update(id: string, role: roleUpdateDto) {
        return this.roleModel.findByIdAndUpdate(id, role, {
            new: true
        }).exec();
    }

    async getAll() {
        return this.roleModel.find().exec();
    }

    async findById(id: string) {
        return this.roleModel.findById(id);
    }

    async delete(id: string) {
        return this.roleModel.findByIdAndDelete(id).exec();
    }
}
