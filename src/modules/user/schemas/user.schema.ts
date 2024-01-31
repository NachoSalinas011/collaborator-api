import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import UserRole from '../../../common/enums/role.enum';

class Role {
    name: string;
    id: string;
}

@Schema({
    timestamps: true
})
export class User {
    @Prop({ requierd: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ default: UserRole.ADMIN })
    role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);