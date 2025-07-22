import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentoUsuario } from '../models/documento-usuario.entity';
import { DocumentosController } from './documentos.controller';
import { DocumentosService } from './documentos.service';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentoUsuario])],
  controllers: [DocumentosController],
  providers: [DocumentosService],
})
export class DocumentosModule {} 