import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';
import { RequisitoMatricula } from './requisito-matricula.entity';

@Entity('documentos_usuario')
export class DocumentoUsuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  usuario_id: string;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column()
  requisito_id: number;

  @ManyToOne(() => RequisitoMatricula)
  @JoinColumn({ name: 'requisito_id' })
  requisito: RequisitoMatricula;

  @Column({ type: 'text', nullable: true })
  url_archivo: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_subida: Date;

  @Column({ type: 'text', default: 'pendiente' })
  estado: string;

  @Column({ type: 'text', nullable: true })
  observaciones: string;
} 