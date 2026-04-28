import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClosuresService } from './closures.service';
import { createClouseDto } from './dto/createClouseDto';

@Controller('closures')
export class ClosuresController {
  constructor(private readonly closuresService: ClosuresService) {}

  @Post()
  async createClosure(@Body() closure: createClouseDto) {
    return await this.closuresService.createClosure(closure);
  }

  @Get()
  async getClosures() {
    return await this.closuresService.getClosures();
  }

  @Get(':id')
  async getClosureById(@Param('id') id: string) {
    return await this.closuresService.getClosureById(id);
  }
}
