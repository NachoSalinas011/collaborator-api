import { Module } from '@nestjs/common';
import { SkillController } from './skill.controller';
import { SkillService } from './skill.service';
@Module({
  imports: [

  ],
  providers: [SkillService],
  controllers: [SkillController]
})
export class SkillModule { }
