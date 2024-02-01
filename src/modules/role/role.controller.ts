import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import UserRole from 'src/common/enums/role.enum';
import { IsValidId } from 'src/decorators/id.decorator';
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
    async create(@Body(new ValidationPipe()) data: RoleCreateDto) {
        return this.roleService.create(data);
    }

    @Roles(UserRole.ADMIN.name)
    @IsValidId()
    @Put('update/:id')
    async update(@Param('id') id: string, @Body(new ValidationPipe()) data: roleUpdateDto) {
        return this.roleService.update(id, data);
    }

    @Public()
    @Get('all')
    async getAll() {
        return this.roleService.getAll();
    }

    @IsValidId()
    @Get('getById/:id')
    async getById(@Param('id') id: string) {
        return this.roleService.findById(id);
    }

    @IsValidId()
    @Roles(UserRole.ADMIN.name)
    @Delete('delete/:id')
    async delete(@Param('id') id: string) {
        return this.roleService.delete(id);
    }
}
