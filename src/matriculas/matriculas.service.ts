import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Matricula } from '../models/matricula.entity';

@Injectable()
export class MatriculasService {
  constructor(
    @InjectRepository(Matricula)
    private readonly matriculaRepository: Repository<Matricula>,
  ) {}

  findAll() {
    return this.matriculaRepository.find();
  }

  findOne(id: string) {
    return this.matriculaRepository.findOneBy({ id });
  }

  create(data: Partial<Matricula>) {
    const matricula = this.matriculaRepository.create(data);
    return this.matriculaRepository.save(matricula);
  }

  update(id: string, data: Partial<Matricula>) {
    return this.matriculaRepository.update(id, data);
  }

  remove(id: string) {
    return this.matriculaRepository.delete(id);
  }
} 