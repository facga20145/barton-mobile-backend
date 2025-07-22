import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequisitoMatricula } from '../models/requisito-matricula.entity';

@Injectable()
export class RequisitosService {
  constructor(
    @InjectRepository(RequisitoMatricula)
    private readonly requisitoRepository: Repository<RequisitoMatricula>,
  ) {}

  findAll() {
    return this.requisitoRepository.find();
  }

  findOne(id: number) {
    return this.requisitoRepository.findOneBy({ id });
  }

  create(data: Partial<RequisitoMatricula>) {
    const requisito = this.requisitoRepository.create(data);
    return this.requisitoRepository.save(requisito);
  }

  update(id: number, data: Partial<RequisitoMatricula>) {
    return this.requisitoRepository.update(id, data);
  }

  remove(id: number) {
    return this.requisitoRepository.delete(id);
  }
} 