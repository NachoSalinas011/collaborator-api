import { Body, Controller, Get, Post } from '@nestjs/common';
import UserRole from 'src/common/enums/role.enum';
import { Roles } from 'src/decorators/role.decorator';
import { CollaboratorService } from './collaborator.service';
import { collaboratorCreateDto } from './dto/collaborator-create.dto';

@Controller('collaborator')
export class CollaboratorController {
    constructor(
        private collaboratorService: CollaboratorService
    ) { }

    @Roles(UserRole.ADMIN.name)
    @Get('user')
    async getUser() {
        return 'Usuario'
    }

    @Roles(UserRole.ADMIN.name)
    @Get('admin')
    async getAdministrator() {
        return 'Administrador'
    }

    @Roles(UserRole.ADMIN.name)
    @Post('create')
    async create(@Body() collaborator: collaboratorCreateDto) {
        return this.collaboratorService.create(collaborator);
    }
}
