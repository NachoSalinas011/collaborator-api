import { Role } from "src/common/role.enum";

export interface User {
    user: string,
    password: string,
    id: number,
    roles: Role[],
}