import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PerfilesModule } from './perfiles/perfiles.module';
import { SedesModule } from './sedes/sedes.module';
import { MatriculasModule } from './matriculas/matriculas.module';
import { RequisitosModule } from './requisitos/requisitos.module';
import { DocumentosModule } from './documentos/documentos.module';
import { PagosModule } from './pagos/pagos.module';
import { EventosModule } from './eventos/eventos.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    UsuariosModule,
    PerfilesModule,
    SedesModule,
    MatriculasModule,
    RequisitosModule,
    DocumentosModule,
    PagosModule,
    EventosModule,
    NotificacionesModule,
  ],
})
export class AppModule {}
