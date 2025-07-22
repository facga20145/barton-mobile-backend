import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilUsuario } from '../models/perfil-usuario.entity';
import { PerfilesController } from './perfiles.controller';
import { PerfilesService } from './perfiles.service';

@Module({
  imports: [TypeOrmModule.forFeature([PerfilUsuario])],
  controllers: [PerfilesController],
  providers: [PerfilesService],
})
export class PerfilesModule {} 