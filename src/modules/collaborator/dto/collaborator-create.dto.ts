import { Skill } from "src/modules/skill/schemas/skill.schema";

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


export class collaboratorCreateDto {
    person: Person;
    role: string;
    admissionDate: Date;
    dischargeDate?: Date;
    aquiredSkills: Skills[]
}