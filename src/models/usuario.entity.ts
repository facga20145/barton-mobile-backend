import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  nombre_completo: string;

  @Column({ type: 'text', unique: true })
  correo: string;

  @Column({ type: 'text', nullable: true })
  telefono: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  dni: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text' })
  tipo_usuario: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_creacion: Date;
} 