import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notificacion } from '../models/notificacion.entity';

@Injectable()
export class NotificacionesService {
  constructor(
    @InjectRepository(Notificacion)
    private readonly notificacionRepository: Repository<Notificacion>,
  ) {}

  findAll() {
    return this.notificacionRepository.find();
  }

  findOne(id: string) {
    return this.notificacionRepository.findOneBy({ id });
  }

  create(data: Partial<Notificacion>) {
    const notificacion = this.notificacionRepository.create(data);
    return this.notificacionRepository.save(notificacion);
  }

  update(id: string, data: Partial<Notificacion>) {
    return this.notificacionRepository.update(id, data);
  }

  remove(id: string) {
    return this.notificacionRepository.delete(id);
  }
} 