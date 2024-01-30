import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { SkillService } from './skill.service';

@Controller('skill')
export class SkillController {
    constructor(
        private SkillService: SkillService
    ) { }

    @Public()
    @Get()
    async GetHi() {
        return 'Hola!';
    }
}
