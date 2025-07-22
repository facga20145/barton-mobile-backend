import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NivelEducativo } from '../models/nivel-educativo.entity';
import { NivelesEducativosController } from './niveles_educativos.controller';
import { NivelesEducativosService } from './niveles_educativos.service';

@Module({
  imports: [TypeOrmModule.forFeature([NivelEducativo])],
  controllers: [NivelesEducativosController],
  providers: [NivelesEducativosService],
})
export class NivelesEducativosModule {} 