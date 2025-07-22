import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PerfilesService } from './perfiles.service';

@Controller('perfiles')
export class PerfilesController {
  constructor(private readonly perfilesService: PerfilesService) {}

  @Get()
  findAll() {
    return this.perfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perfilesService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.perfilesService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.perfilesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perfilesService.remove(id);
  }
} 