import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import UserRole from 'src/common/enums/role.enum';
import { Public } from 'src/decorators/public.decorator';
import { Roles } from 'src/decorators/role.decorator';
import { skillCreateDto } from './dto/skill-create.dto';
import { skillUpdateDto } from './dto/skill-update.dto';
import { SkillService } from './skill.service';

@Controller('skill')
export class SkillController {
    constructor(
        private SkillService: SkillService
    ) { }

    @Roles(UserRole.ADMIN.name)
    @Post('create')
    async create(@Body(new ValidationPipe()) data: skillCreateDto) {
        return this.SkillService.create(data);
    }

    @Roles(UserRole.ADMIN.name)
    @Put('update/:id')
    async update(@Param('id') id: string, @Body(new ValidationPipe()) data: skillUpdateDto) {
        return this.SkillService.update(id, data);
    }

    @Public()
    @Get('all')
    async getAll() {
        return this.SkillService.getAll();
    }

    @Get('GetById/:id')
    async getById(@Param('id') id: string) {
        return this.SkillService.getById(id);
    }

    @Roles(UserRole.ADMIN.name)
    @Delete('Delete/:id')
    async delete(@Param('id') id: string) {
        return this.SkillService.delete(id);
    }
}
