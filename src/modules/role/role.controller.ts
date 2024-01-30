import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import UserRole from 'src/common/enums/role.enum';
import { Public } from 'src/decorators/public.decorator';
import { Roles } from 'src/decorators/role.decorator';
import { RoleCreateDto } from './dto/role-create.dto';
import { roleUpdateDto } from './dto/role-update.dto';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
    constructor(
        private roleService: RoleService
    ) { }


    @Roles(UserRole.ADMIN.name)
    @Post('create')
    async create(@Body(new ValidationPipe()) role: RoleCreateDto) {
        return this.roleService.create(role);
    }

    @Roles(UserRole.ADMIN.name)
    @Put('update/:id')
    async update(@Param('id') id: string, @Body(new ValidationPipe()) role: roleUpdateDto) {
        return this.roleService.update(id, role);
    }

    @Public()
    @Get('allRoles')
    async getAll() {
        return this.roleService.getAll();
    }

    @Get('GetById/:id')
    async GetById(@Param('id') id: string) {
        return this.roleService.findById(id);
    }

    @Roles(UserRole.ADMIN.name)
    @Delete('Delete/:id')
    async Delete(@Param('id') id: string) {
        return this.roleService.delete(id);
    }
}
