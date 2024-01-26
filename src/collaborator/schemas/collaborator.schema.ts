import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

class Address {
    city: string;
    street: string;
    number: string;
    country: string;
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
}

export const CollaboratorSchema = SchemaFactory.createForClass(Collaborator);