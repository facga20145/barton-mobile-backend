import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getTestMessage() {
    return { message: 'Servicio Auth funcionando' };
  }
} 