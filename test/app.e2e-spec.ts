import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Endpoints de prueba (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  const endpoints = [
    { path: '/auth/test', message: 'Auth funcionando' },
    { path: '/usuarios/test', message: 'Usuarios funcionando' },
    { path: '/perfiles/test', message: 'Perfiles funcionando' },
    { path: '/sedes/test', message: 'Sedes funcionando' },
    { path: '/matriculas/test', message: 'Matriculas funcionando' },
    { path: '/requisitos/test', message: 'Requisitos funcionando' },
    { path: '/documentos/test', message: 'Documentos funcionando' },
    { path: '/pagos/test', message: 'Pagos funcionando' },
    { path: '/eventos/test', message: 'Eventos funcionando' },
    { path: '/notificaciones/test', message: 'Notificaciones funcionando' },
  ];

  endpoints.forEach(({ path, message }) => {
    it(`GET ${path} debe responder correctamente`, () => {
      return request(app.getHttpServer())
        .get(path)
        .expect(200)
        .expect({ message });
    });
  });
});
