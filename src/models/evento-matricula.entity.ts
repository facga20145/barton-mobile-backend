import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Sede } from './sede.entity';
import { NivelEducativo } from './nivel-educativo.entity';

@Entity('eventos_matricula')
export class EventoMatricula {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  titulo: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'timestamp', nullable: true })
  fecha_inicio: Date;

  @Column({ type: 'timestamp', nullable: true })
  fecha_fin: Date;

  @Column({ nullable: true })
  sede_id: string;

  @ManyToOne(() => Sede, { nullable: true })
  @JoinColumn({ name: 'sede_id' })
  sede: Sede;

  @Column({ nullable: true })
  nivel_id: number;

  @ManyToOne(() => NivelEducativo, { nullable: true })
  @JoinColumn({ name: 'nivel_id' })
  nivel: NivelEducativo;
} 