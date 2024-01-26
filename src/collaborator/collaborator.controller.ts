import { Body, Controller, Get, Post } from '@nestjs/common';
import { Role } from 'src/common/role.enum';
import { Roles } from 'src/decorators/role.decorator';
import { CollaboratorService } from './collaborator.service';

@Controller('collaborator')
export class CollaboratorController {
    constructor(
        private collaboratorService: CollaboratorService
    ) { }

    @Roles(Role.User)
    @Get('user')
    async getUser() {
        return 'Usuario'
    }

    @Roles(Role.Admin)
    @Get('admin')
    async getAdministrator() {
        return 'Administrador'
    }

    @Roles(Role.Admin)
    @Post('create')
    async create(@Body() collaborator: any) {
        return this.collaboratorService.create(collaborator);
    }
}
