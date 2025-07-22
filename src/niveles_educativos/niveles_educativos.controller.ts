import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { NivelesEducativosService } from './niveles_educativos.service';

@Controller('niveles-educativos')
export class NivelesEducativosController {
  constructor(private readonly nivelesService: NivelesEducativosService) {}

  @Get()
  findAll() {
    return this.nivelesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.nivelesService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.nivelesService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.nivelesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.nivelesService.remove(id);
  }
} 