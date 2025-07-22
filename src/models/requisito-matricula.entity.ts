import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { NivelEducativo } from './nivel-educativo.entity';

@Entity('requisitos_matricula')
export class RequisitoMatricula {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nivel_id: number;

  @ManyToOne(() => NivelEducativo)
  @JoinColumn({ name: 'nivel_id' })
  nivel: NivelEducativo;

  @Column({ type: 'text' })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'boolean', default: true })
  obligatorio: boolean;
} 