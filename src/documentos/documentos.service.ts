import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocumentoUsuario } from '../models/documento-usuario.entity';

@Injectable()
export class DocumentosService {
  constructor(
    @InjectRepository(DocumentoUsuario)
    private readonly documentoRepository: Repository<DocumentoUsuario>,
  ) {}

  findAll() {
    return this.documentoRepository.find();
  }

  findOne(id: string) {
    return this.documentoRepository.findOneBy({ id });
  }

  create(data: Partial<DocumentoUsuario>) {
    const documento = this.documentoRepository.create(data);
    return this.documentoRepository.save(documento);
  }

  update(id: string, data: Partial<DocumentoUsuario>) {
    return this.documentoRepository.update(id, data);
  }

  remove(id: string) {
    return this.documentoRepository.delete(id);
  }
} 