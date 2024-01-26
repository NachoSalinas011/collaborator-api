import { Controller, Post, Body } from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';

@Controller('collaborator')
export class CollaboratorController {
    constructor(
        private collaboratorService: CollaboratorService
    ) { }

    @Post('create')
    async create(@Body() collaborator: any) {
        return this.collaboratorService.create(collaborator);
    }
}
