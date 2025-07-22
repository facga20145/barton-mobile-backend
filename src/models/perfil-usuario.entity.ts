import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Sede } from './sede.entity';

@Entity('perfiles_usuario')
export class PerfilUsuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  usuario_id: string;

  @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ type: 'text', nullable: true })
  direccion: string;

  @Column({ type: 'date', nullable: true })
  fecha_nacimiento: Date;

  @Column({ type: 'text', nullable: true })
  ocupacion: string;

  @Column({ type: 'text', nullable: true })
  genero: string;

  @Column({ nullable: true })
  sede_preferida: string;

  @ManyToOne(() => Sede, { nullable: true })
  @JoinColumn({ name: 'sede_preferida' })
  sede: Sede;
} 