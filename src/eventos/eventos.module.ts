import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventoMatricula } from '../models/evento-matricula.entity';
import { EventosController } from './eventos.controller';
import { EventosService } from './eventos.service';

@Module({
  imports: [TypeOrmModule.forFeature([EventoMatricula])],
  controllers: [EventosController],
  providers: [EventosService],
})
export class EventosModule {} 