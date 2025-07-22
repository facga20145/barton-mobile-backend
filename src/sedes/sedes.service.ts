import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sede } from '../models/sede.entity';

@Injectable()
export class SedesService {
  constructor(
    @InjectRepository(Sede)
    private readonly sedeRepository: Repository<Sede>,
  ) {}

  findAll() {
    return this.sedeRepository.find();
  }

  findOne(id: string) {
    return this.sedeRepository.findOneBy({ id });
  }

  create(data: Partial<Sede>) {
    const sede = this.sedeRepository.create(data);
    return this.sedeRepository.save(sede);
  }

  update(id: string, data: Partial<Sede>) {
    return this.sedeRepository.update(id, data);
  }

  remove(id: string) {
    return this.sedeRepository.delete(id);
  }
} 