import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true
})
export class Skill {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    description: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);