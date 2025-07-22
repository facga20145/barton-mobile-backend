import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PerfilUsuario } from '../models/perfil-usuario.entity';

@Injectable()
export class PerfilesService {
  constructor(
    @InjectRepository(PerfilUsuario)
    private readonly perfilRepository: Repository<PerfilUsuario>,
  ) {}

  findAll() {
    return this.perfilRepository.find();
  }

  findOne(id: string) {
    return this.perfilRepository.findOneBy({ id });
  }

  create(data: Partial<PerfilUsuario>) {
    const perfil = this.perfilRepository.create(data);
    return this.perfilRepository.save(perfil);
  }

  update(id: string, data: Partial<PerfilUsuario>) {
    return this.perfilRepository.update(id, data);
  }

  remove(id: string) {
    return this.perfilRepository.delete(id);
  }
} 