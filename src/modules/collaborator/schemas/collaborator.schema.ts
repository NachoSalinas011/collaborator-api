import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Acquiredskills } from '../interfaces/acquiredSkills.interface';
import { Person } from '../interfaces/person.interface';


@Schema({
    timestamps: true
})
export class Collaborator {
    @Prop({ required: true })
    person: Person;

    @Prop({ required: true })
    jobPosition: string;

    @Prop({ required: true })
    admissionDate: Date;

    @Prop({ required: false })
    dischargeDate?: Date;

    @Prop({ required: false })
    acquiredSkills: Acquiredskills[]
}

export const CollaboratorSchema = SchemaFactory.createForClass(Collaborator);