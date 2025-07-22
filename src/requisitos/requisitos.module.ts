import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequisitoMatricula } from '../models/requisito-matricula.entity';
import { RequisitosController } from './requisitos.controller';
import { RequisitosService } from './requisitos.service';

@Module({
  imports: [TypeOrmModule.forFeature([RequisitoMatricula])],
  controllers: [RequisitosController],
  providers: [RequisitosService],
})
export class RequisitosModule {} 