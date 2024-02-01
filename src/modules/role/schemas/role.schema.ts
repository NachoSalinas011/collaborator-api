import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({
    timestamps: true
})
export class Role {
    @Prop({ required: true })
    name: string
}

export const RoleSchema = SchemaFactory.createForClass(Role);