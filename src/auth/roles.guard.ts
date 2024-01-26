import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../common/role.enum';
import { ROLES_KEY } from '../decorators/role.decorator';


@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
            ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (!requiredRoles) {
            return true;
        }

        const { user } = context.switchToHttp().getRequest();
        const isValid: boolean = requiredRoles.some((role) => user.roles?.includes(role))
        return isValid;
    }
}