import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EventosService } from './eventos.service';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Get()
  findAll() {
    return this.eventosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.eventosService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.eventosService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.eventosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.eventosService.remove(id);
  }
} 