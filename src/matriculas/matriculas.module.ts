import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Matricula } from '../models/matricula.entity';
import { MatriculasController } from './matriculas.controller';
import { MatriculasService } from './matriculas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Matricula])],
  controllers: [MatriculasController],
  providers: [MatriculasService],
})
export class MatriculasModule {} 