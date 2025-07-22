import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';
import { NivelEducativo } from './nivel-educativo.entity';
import { Sede } from './sede.entity';

@Entity('matriculas')
export class Matricula {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  usuario_id: string;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column()
  nivel_id: number;

  @ManyToOne(() => NivelEducativo)
  @JoinColumn({ name: 'nivel_id' })
  nivel: NivelEducativo;

  @Column()
  sede_id: string;

  @ManyToOne(() => Sede)
  @JoinColumn({ name: 'sede_id' })
  sede: Sede;

  @Column({ type: 'text', default: 'en_proceso' })
  estado: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_inicio: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_ultima_actualizacion: Date;
} 