import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillController } from './skill.controller';
import { SkillService } from './skill.service';
import { SkillSchema, Skill } from './schemas/skill.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Skill.name,
      schema: SkillSchema
  }])
  ],
  providers: [SkillService],
  controllers: [SkillController]
})
export class SkillModule { }
