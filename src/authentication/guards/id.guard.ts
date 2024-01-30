import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { isValidObjectId } from 'mongoose';
import { IS_VALID_ID } from 'src/decorators/id.decorator';

@Injectable()
export class IdGuard implements CanActivate {
    constructor(
        private reflector: Reflector
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const validateObjectId: boolean = this.reflector.get<boolean>(IS_VALID_ID, context.getHandler());

        if (!validateObjectId) {
            return true;
        }

        const id = context.switchToHttp().getRequest().params.id;

        if (!id || !isValidObjectId(id)) {
            return false;
        }
        return true;
    }
}