import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('test')
  test() {
    return { message: 'Auth funcionando' };
  }
} 