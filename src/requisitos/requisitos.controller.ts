import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RequisitosService } from './requisitos.service';

@Controller('requisitos')
export class RequisitosController {
  constructor(private readonly requisitosService: RequisitosService) {}

  @Get()
  findAll() {
    return this.requisitosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.requisitosService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.requisitosService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.requisitosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.requisitosService.remove(id);
  }
} 