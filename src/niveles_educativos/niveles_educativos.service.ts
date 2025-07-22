import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NivelEducativo } from '../models/nivel-educativo.entity';

@Injectable()
export class NivelesEducativosService {
  constructor(
    @InjectRepository(NivelEducativo)
    private readonly nivelRepository: Repository<NivelEducativo>,
  ) {}

  findAll() {
    return this.nivelRepository.find();
  }

  findOne(id: number) {
    return this.nivelRepository.findOneBy({ id });
  }

  create(data: Partial<NivelEducativo>) {
    const nivel = this.nivelRepository.create(data);
    return this.nivelRepository.save(nivel);
  }

  update(id: number, data: Partial<NivelEducativo>) {
    return this.nivelRepository.update(id, data);
  }

  remove(id: number) {
    return this.nivelRepository.delete(id);
  }
} 