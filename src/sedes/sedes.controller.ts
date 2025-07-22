import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SedesService } from './sedes.service';

@Controller('sedes')
export class SedesController {
  constructor(private readonly sedesService: SedesService) {}

  @Get()
  findAll() {
    return this.sedesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sedesService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.sedesService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.sedesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sedesService.remove(id);
  }
} 