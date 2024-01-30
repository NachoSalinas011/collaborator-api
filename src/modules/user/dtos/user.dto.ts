import { Role } from "src/common/enums/role.enum";

export class UserDto {
    email: string;
    id: string
    role: Role;
}