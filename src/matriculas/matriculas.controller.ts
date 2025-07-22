import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MatriculasService } from './matriculas.service';

@Controller('matriculas')
export class MatriculasController {
  constructor(private readonly matriculasService: MatriculasService) {}

  @Get()
  findAll() {
    return this.matriculasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matriculasService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.matriculasService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.matriculasService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matriculasService.remove(id);
  }
} 