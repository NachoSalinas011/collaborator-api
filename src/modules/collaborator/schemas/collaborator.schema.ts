import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Skill } from '../../skill/schemas/skill.schema';

class Address {
    city: string;
    street: string;
    number: string;
    country: string;
}

class Skills {
    skill: Skill;
    level: number;
}

class Person {
    name: string;
    birthDate: Date;
    address: Address;
}

@Schema()
export class Collaborator {
    @Prop({ required: true })
    person: Person;

    @Prop({ required: true })
    role: string;
    
    @Prop({ required: true })
    admissionDate: Date;
    
    @Prop({ required: false })
    dischargeDate?: Date;
    
    @Prop({ required: false })
    aquiredSkills: Skills[]
}

export const CollaboratorSchema = SchemaFactory.createForClass(Collaborator);