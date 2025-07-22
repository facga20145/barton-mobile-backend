import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventoMatricula } from '../models/evento-matricula.entity';

@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(EventoMatricula)
    private readonly eventoRepository: Repository<EventoMatricula>,
  ) {}

  findAll() {
    return this.eventoRepository.find();
  }

  findOne(id: number) {
    return this.eventoRepository.findOneBy({ id });
  }

  create(data: Partial<EventoMatricula>) {
    const evento = this.eventoRepository.create(data);
    return this.eventoRepository.save(evento);
  }

  update(id: number, data: Partial<EventoMatricula>) {
    return this.eventoRepository.update(id, data);
  }

  remove(id: number) {
    return this.eventoRepository.delete(id);
  }
} 