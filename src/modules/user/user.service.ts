import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterDto } from '../../authentication/dto/register.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>
    ) { }

    async create(user: RegisterDto) {
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }

    async getByEmail(email: string): Promise<any> {
        return this.userModel.findOne({ email }).exec();
    }
}
