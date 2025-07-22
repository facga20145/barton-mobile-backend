import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pago } from '../models/pago.entity';

@Injectable()
export class PagosService {
  constructor(
    @InjectRepository(Pago)
    private readonly pagoRepository: Repository<Pago>,
  ) {}

  findAll() {
    return this.pagoRepository.find();
  }

  findOne(id: string) {
    return this.pagoRepository.findOneBy({ id });
  }

  create(data: Partial<Pago>) {
    const pago = this.pagoRepository.create(data);
    return this.pagoRepository.save(pago);
  }

  update(id: string, data: Partial<Pago>) {
    return this.pagoRepository.update(id, data);
  }

  remove(id: string) {
    return this.pagoRepository.delete(id);
  }
} 