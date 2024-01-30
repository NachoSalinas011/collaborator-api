import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import UserRole from 'src/common/enums/role.enum';
import { Roles } from 'src/decorators/role.decorator';
import { CollaboratorService } from './collaborator.service';
import { collaboratorCreateDto } from './dto/collaborator-create.dto';
import { collaboratorUpdateDto } from './dto/collaborator-update.dto';

@Controller('collaborator')
export class CollaboratorController {
    constructor(
        private collaboratorService: CollaboratorService
    ) { }

    @Roles(UserRole.ADMIN.name)
    @Post('create')
    async create(@Body(new ValidationPipe()) data: collaboratorCreateDto) {
        return this.collaboratorService.create(data);
    }

    @Roles(UserRole.ADMIN.name)
    @Put('update/:id')
    async update(@Param('id') id: string, @Body(new ValidationPipe()) data: collaboratorUpdateDto) {
        return this.collaboratorService.update(id, data);
    }

    @Get('all')
    async getAll() {
        return this.collaboratorService.getAll();
    }

    @Get('getById/:id')
    async getById(@Param('id') id: string) {
        return this.collaboratorService.findByid(id);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: string) {
        return this.collaboratorService.delete(id);
    }
}
